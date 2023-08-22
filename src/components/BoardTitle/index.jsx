// eslint-disable-next-line react/prop-types
function BoardTitle({ title, titleColor, taskColor, taskCount }) {
  return (
    <div className="w-[300px] h-[18px] flex items-center justify-between">
      <h3
        className={`${titleColor} font-semibold text-[15px] leading-[18.15px]`}
      >
        {title}
      </h3>
      <span className={`${taskColor} font-medium text-xs leading-[14.25px]`}>
        {taskCount} Tasks
      </span>
    </div>
  );
}

export default BoardTitle;
