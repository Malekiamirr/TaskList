/* eslint-disable react/prop-types */
import { BoardTitle, Task } from '../index';

// eslint-disable-next-line react/prop-types
function DoneBoard({ tasks, moveTask, removeTask }) {
  return (
    <div className="w-[340px] h-[700px] rounded-[10px] p-5 pb-[30px] bg-[#F4F9F3] overflow-y-auto overflow-x-hidden custom-scrollbar">
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
            removeTask={removeTask}
            sourceBoard={tasks}
            moveTask={moveTask}
            destination="todo"
            de
            complete
          />
        ))}
      </div>
    </div>
  );
}

export default DoneBoard;
