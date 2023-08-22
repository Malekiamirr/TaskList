import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Task({ borderColor, text }) {
  const [inputValue, setInputValue] = useState(text);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div
      style={{ border: `1px solid ${borderColor}` }}
      className="w-[300px] rounded py-[10px] px-[10px] bg-white flex items-center gap-2"
    >
      <div className="w-4 h-4">
        <input
          type="checkbox"
          className="w-4 h-4 flex items-center justify-center"
        />
      </div>
      <div className="w-full">
        <input
          value={inputValue}
          className="text-xs font-semibold leading-[14.52px] w-full break-all outline-none"
          onChange={handleChange}
        />
      </div>

      {/* remove button */}
      <div></div>
    </div>
  );
}

export default Task;
