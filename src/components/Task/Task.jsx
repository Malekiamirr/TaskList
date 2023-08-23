import { IoClose } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
export function Task({
  borderColor,
  closeButtonColor,
  text,
  id,
  removeTask,
  complete,
}) {
  return (
    <div
      style={{ border: `1px solid ${borderColor}` }}
      className="w-[300px] rounded pt-[10px] pb-[7px] px-[10px] bg-white flex items-center gap-2 group"
    >
      <div className="w-4 h-4 flex items-center">
        <input
          type="checkbox"
          className="w-4 h-4 flex items-center justify-center"
        />
      </div>

      <p
        className={`text-xs font-semibold leading-[14.52px] w-full break-all ${
          complete && 'line-through'
        }`}
      >
        {text}
      </p>

      {/* remove button */}
      <IoClose
        onClick={() => {
          removeTask(id);
        }}
        style={{ color: closeButtonColor }}
        className="w-5 h-5 font-bold group-hover:opacity-100 group-hover:z-auto hover:cursor-pointer opacity-0 transition-opacity duration-300 -z-50"
      />
    </div>
  );
}
