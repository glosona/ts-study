import * as React from "react";

interface Props {
  label?: string;
  onChange?: () => void;
  placeholder?: string;
}

const Input = ({ label, placeholder, onChange }: Props) => {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={label}>{label}</label>}
      <input
        id={label}
        type="text"
        placeholder={placeholder}
        className="p-1 border"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
