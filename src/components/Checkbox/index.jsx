/* eslint-disable react/prop-types */
import { useState } from 'react';

const Checkbox = ({ isChecked, onChange, borderColor }) => {
  const [checked, setChecked] = useState(isChecked);

  const toggleCheckbox = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={toggleCheckbox}
        />
        <div
          style={{ border: `1px solid ${borderColor}` }}
          className="w-4 h-4 bg-white transition-all duration-300 ease-in-out flex items-center justify-center"
        >
          <svg
            className={`w-5 h-5 ${checked ? 'opacity-100' : 'opacity-0'} `}
            style={{ color: borderColor }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5.13 10.29l4.95 4.95L18.29 7.3"
            />
          </svg>
        </div>
      </div>
    </label>
  );
};

export default Checkbox;
