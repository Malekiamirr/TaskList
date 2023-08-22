import { BoardTitle } from '../index';

function TodoBoard() {
  return (
    <div className="w-[340px] h-[700px] rounded-[10px] p-5 pb-[30px] bg-[#FEF4F3]">
      <BoardTitle
        title={'Todo'}
        titleColor={'text-[#6E1E29]'}
        taskColor={'text-[#D4AFB4]'}
        taskCount={3}
      />
    </div>
  );
}

export default TodoBoard;
