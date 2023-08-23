import { useState, useRef, useEffect } from 'react';
import { BoardTitle, Task } from '../index';
import { BiPlus } from 'react-icons/bi';
import initialData from '../../Data/initial-data';

function DoingBoard() {
  const [tasks, setTasks] = useState(initialData.doing);
  const [showTaskInput, setShowTaskInput] = useState(false);
  const [newTask, setNewTask] = useState('');

  const inputRef = useRef(null);

  const handleRemoveTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const handleBlur = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = {
        id: `doing-task-${tasks.length + 1}`,
        task: newTask,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
    setShowTaskInput(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      const newTaskObj = {
        id: `doing-task-${tasks.length + 1}`,
        task: newTask,
      };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
      setShowTaskInput(false);
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
    <div className="w-[340px] h-[700px] rounded-[10px] p-5 pb-[30px] bg-[#FFFBF2] overflow-y-auto overflow-x-hidden">
      <BoardTitle
        title={'Doing 💪'}
        titleColor={'text-[#795B19]'}
        taskColor={'text-[#DECCA4]'}
        taskCount={tasks.length}
      />
      <div className="flex flex-col mt-5 gap-3">
        {tasks.map((task) => (
          <Task
            key={task.id}
            text={task.task}
            borderColor={'#EAE2CF'}
            closeButtonColor={'#DECCA4'}
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
            onPaste={handlePaste}
            ref={inputRef}
            className="w-full p-2 border rounded focus:outline-none focus:border-[#EAE2CF] text-xs font-semibold leading-[14.52px]"
          />
        )}
        <button
          onClick={() => {
            setShowTaskInput(true);
          }}
          className="flex items-center p-[8px] pl-[6px] gap-[6px] w-min"
        >
          <BiPlus className="text-[#C2A25B] w-5 h-5" />
          <span className="text-[13px] font-semibold text-[#C2A25B]">New</span>
        </button>
      </div>
    </div>
  );
}

export default DoingBoard;
