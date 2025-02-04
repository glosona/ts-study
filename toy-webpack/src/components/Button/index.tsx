import * as React from "react";

interface Props {
  name?: string | "Hello";
  onClick?: () => void;
}

const Button = ({ name, onClick }: Props) => {
  return (
    <button
      className="p-1 hover:bg-black/20 border cursor-pointer"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
