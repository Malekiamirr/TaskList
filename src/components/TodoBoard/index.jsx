import { BoardTitle, Task } from '../index';
import { BiPlus } from 'react-icons/bi';

function TodoBoard() {
  return (
    <div className="w-[340px] h-[700px] rounded-[10px] p-5 pb-[30px] bg-[#FEF4F3] overflow-y-auto overflow-x-hidden">
      {/* Title */}
      <BoardTitle
        title={'Todo'}
        titleColor={'text-[#6E1E29]'}
        taskColor={'text-[#D4AFB4]'}
        taskCount={3}
      />

      {/* Tasks List */}
      <div className="flex flex-col mt-5 gap-3">
        <Task
          text={
            'Start with meditation, exercise & breakfast for a productive day'
          }
          borderColor={'#F3E1DF'}
        />
        <Task
          text={'Read to learn something new every day'}
          borderColor={'#F3E1DF'}
        />

        <Task
          text={'Learn something fresh & relevant'}
          borderColor={'#F3E1DF'}
        />

        {/* New Button */}
        <button className="flex items-center p-[8px] pl-[6px] gap-[6px] w-full">
          <BiPlus className="text-[#d66979] w-5 h-5" />
          <span className="text-[13px] font-semibold text-[#D37A87]">New</span>
        </button>
      </div>
    </div>
  );
}

export default TodoBoard;
