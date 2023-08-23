import { useState } from 'react';
import { BoardTitle, Task } from '../index';
import initialData from '../../Data/initial-data';

// eslint-disable-next-line react/prop-types
function DoneBoard() {
  const [tasks, setTasks] = useState(initialData.done);

  const handleRemoveTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="w-[340px] h-[700px] rounded-[10px] p-5 pb-[30px] bg-[#F4F9F3] overflow-y-auto overflow-x-hidden">
      {/* Title */}
      <BoardTitle
        title={'Done 🎉'}
        titleColor={'text-[#286C1A]'}
        taskColor={'text-[#BCD7B6]'}
        taskCount={tasks.length}
      />

      {/* Tasks List */}
      <div className="flex flex-col mt-5 gap-3">
        {tasks.map((task) => (
          <Task
            key={task.id}
            text={task.task}
            borderColor={'#DDEED9'}
            closeButtonColor={'#BCD7B6'}
            id={task.id}
            removeTask={handleRemoveTask}
            complete
          />
        ))}
      </div>
    </div>
  );
}

export default DoneBoard;
