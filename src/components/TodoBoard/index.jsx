/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import { BoardTitle, Task } from '../index';
import { BiPlus } from 'react-icons/bi';
import generateUniqueId from '../../utils/generateUniqueId';

// eslint-disable-next-line react/prop-types
function TodoBoard({ tasks, setTasks, moveTask, removeTask }) {
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [newTask, setNewTask] = useState('');

  const inputRef = useRef(null);

  const handleBlur = () => {
    if (newTask.trim() !== '') {
      // Add the non-empty new task to the tasks list
      const newTaskObj = {
        id: `todo-task-${generateUniqueId()}`,
        task: newTask,
      };
      setTasks([...tasks, newTaskObj]); // Update the state with the new task
      setNewTask(''); // Clear the input field
    }
    setShowTaskInput(false); // Hide the input field
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      const newTaskObj = {
        id: `todo-task-${generateUniqueId()}`,
        task: newTask,
      };
      setTasks([...tasks, newTaskObj]); // Update the state with the new task
      setNewTask(''); // Clear the input field
      setShowTaskInput(false); // Hide the input field
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData('text');
    // Split the pasted text into tasks based on line breaks
    const sentences = pastedText.split('\n').map((sentence) => sentence.trim());
    const validSentences = sentences.filter((sentence) => sentence !== ''); // Remove empty lines
    if (validSentences.length > 0) {
      const newTasks = validSentences.map((sentence, index) => ({
        id: `doing-task-${tasks.length + index + 1}`,
        task: sentence,
      }));
      setTasks([...tasks, ...newTasks]);
    }
  };

  useEffect(() => {
    if (showTaskInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showTaskInput]);

  return (
    <div className="w-[340px] h-[700px] rounded-[10px] p-5 pb-[30px] bg-[#FEF4F3] overflow-y-auto overflow-x-hidden custom-scrollbar hover:shadow-todo-shadow hover:-translate-y-1 duration-300 transition-all">
      {/* Title */}
      <BoardTitle
        title={'Todo'}
        titleColor={'text-[#6E1E29]'}
        taskColor={'text-[#D4AFB4]'}
        taskCount={tasks.length}
      />

      {/* Tasks List */}
      <div className="flex flex-col mt-5 gap-3">
        {tasks.map((task) => (
          <Task
            key={task.id}
            text={task.task}
            borderColor={'#F3E1DF'}
            closeButtonColor={'#F4C5CB'}
            id={task.id}
            removeTask={removeTask}
            sourceBoard={tasks}
            moveTask={moveTask}
            destination="done"
          />
        ))}

        {showTaskInput && (
          <input
            type="text"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onPaste={handlePaste}
            ref={inputRef}
            className="w-full p-2 border rounded focus:outline-none focus:border-[#F3E1DF] text-xs font-semibold leading-[14.52px]"
          />
        )}

        {/* New Button */}
        <button
          onClick={() => {
            setShowTaskInput(true);
          }}
          className="flex items-center p-[8px] pl-[6px] gap-[6px] w-full"
        >
          <BiPlus className="text-[#d66979] w-5 h-5" />
          <span className="text-[13px] font-semibold text-[#D37A87]">New</span>
        </button>
      </div>
    </div>
  );
}

export default TodoBoard;
