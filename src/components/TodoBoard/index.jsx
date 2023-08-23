import { useState, useRef, useEffect } from 'react';
import { BoardTitle, Task } from '../index';
import { BiPlus } from 'react-icons/bi';

// eslint-disable-next-line react/prop-types
function TodoBoard({ data }) {
  const [tasks, setTasks] = useState(data);
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [newTask, setNewTask] = useState('');

  const inputRef = useRef(null);

  const handleRemoveTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleBlur = () => {
    if (newTask.trim() !== '') {
      // Add the non-empty new task to the tasks list
      const newTaskObj = {
        id: tasks.length + 1,
        task: newTask,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask(''); // Clear the input field
    }
    setShowTaskInput(false); // Show the input field on focus
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      const newTaskObj = {
        id: tasks.length + 1,
        task: newTask,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask(''); // Clear the input field
      setShowTaskInput(false); // Hide the input field
    }
  };

  useEffect(() => {
    if (showTaskInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showTaskInput]);

  return (
    <div className="w-[340px] h-[700px] rounded-[10px] p-5 pb-[30px] bg-[#FEF4F3] overflow-y-auto overflow-x-hidden">
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
            id={task.id}
            removeTask={handleRemoveTask}
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
