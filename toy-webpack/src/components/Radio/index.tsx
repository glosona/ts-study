import * as React from "react";

export interface radioOption {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  options: radioOption[];
}

const Radio = ({ label, options }: Props) => {
  return (
    <div className="flex flex-col">
      {label && <label>{label}</label>}
      {options.map((item, idx) => (
        <div className="flex gap-x-[5px]" key={item.value}>
          <input
            name={label}
            id={item.value}
            type="radio"
            className="p-1 border"
          />
          <label htmlFor={item.value}>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
