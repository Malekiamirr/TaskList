import { IoClose } from 'react-icons/io5';

// eslint-disable-next-line react/prop-types
function Task({ borderColor, text }) {
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

      <p className="text-xs font-semibold leading-[14.52px] w-full break-all">
        {text}
      </p>

      {/* remove button */}
      <IoClose className="w-5 h-5 font-bold text-[#F4C5CB] group-hover:opacity-100 group-hover:z-auto hover:cursor-pointer opacity-0 transition-opacity duration-300 -z-50" />
    </div>
  );
}

export default Task;
