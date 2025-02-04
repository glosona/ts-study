import * as React from "react";

export interface selectOption {
  label: string;
  value: string;
  name?: string;
}

interface Props {
  label?: string;
  onClick?: () => void;
  options: selectOption[];
}

const Select = ({ label, options, onClick }: Props) => {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={label}>{label}</label>}
      <select className="p-1 border " onClick={onClick}>
        {options.map((item, idx) => (
          <option value={item.value} key={idx}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
