import { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import Checkbox from '../Checkbox';
/* eslint-disable react/prop-types */
function Task({
  borderColor,
  closeButtonColor,
  text,
  id,
  removeTask,
  sourceBoard,
  moveTask,
  destination,
  complete,
}) {
  const [isChecked, setIsChecked] = useState(complete ? true : false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  useEffect(() => {
    // Check if the checkbox is checked
    if (destination === 'todo') {
      if (!isChecked) {
        // After 3 seconds, move the task to the Done list
        const timer = setTimeout(() => {
          moveTask(id, sourceBoard, destination);
        }, 3000);

        // Clean up the timer if the component unmounts or if the checkbox is unchecked
        return () => clearTimeout(timer);
      }
    } else {
      if (isChecked) {
        // After 3 seconds, move the task to the Done list
        const timer = setTimeout(() => {
          moveTask(id, sourceBoard, destination);
        }, 3000);

        // Clean up the timer if the component unmounts or if the checkbox is unchecked
        return () => clearTimeout(timer);
      }
    }
  }, [isChecked, id, moveTask]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleTextBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    // Check if Enter key is pressed
    if (e.key === 'Enter') {
      handleTextBlur(); // Stop editing
    }
  };
  if (editedText) {
    return (
      <div
        style={{ border: `1px solid ${borderColor}` }}
        className="w-[300px] rounded pt-[10px] pb-[7px] px-[10px] bg-white flex items-center gap-2 group"
      >
        <div className="flex items-center w-4 h-4">
          <Checkbox
            isChecked={isChecked}
            onChange={(checked) => setIsChecked(checked)}
            borderColor={closeButtonColor}
          />
        </div>

        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={handleTextChange}
            onBlur={handleTextBlur}
            onKeyDown={handleKeyDown}
            autoFocus
            className="text-xs font-semibold leading-[14.52px] w-full focus:outline-none bg-transparent border-none"
          />
        ) : (
          <p
            onClick={handleEditClick}
            className={`text-xs font-semibold leading-[14.52px] w-full break-all cursor-pointer ${
              complete && 'line-through'
            }`}
          >
            {editedText}
          </p>
        )}

        {/* remove button */}
        <IoClose
          onClick={() => {
            removeTask(id, sourceBoard);
          }}
          style={{ color: closeButtonColor }}
          className="w-5 h-5 font-bold transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:z-auto hover:cursor-pointer -z-50"
        />
      </div>
    );
  } else {
    return null;
  }
}

export default Task;
