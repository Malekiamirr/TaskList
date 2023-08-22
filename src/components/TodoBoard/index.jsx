import { BoardTitle, Task } from '../index';

function TodoBoard() {
  return (
    <div className="w-[340px] h-[700px] rounded-[10px] p-5 pb-[30px] bg-[#FEF4F3]">
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
      </div>
    </div>
  );
}

export default TodoBoard;
