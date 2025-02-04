import * as React from "react";
import Input from "../Input/index";
import Button from "../Button/index";
import Select from "../Select/index";
import Radio from "../Radio/index";
import { selectOption } from "../Select/index";
import { radioOption } from "../Radio/index";

interface Props {
  onClose: () => void;
}

const AddModal = ({ onClose }: Props) => {
  const clickSave = (): void => {
    console.log("saved!");
    onClose();
  };

  const relationshipOptions: selectOption[] = [
    { label: "Family", value: "family" },
    { label: "Friend", value: "friend" },
    { label: "Colleagues", value: "colleagues" },
  ];

  const genderOptions: radioOption[] = [
    { label: "Male", value: "M" },
    { label: "Female", value: "F" },
  ];

  return (
    <div className="w-full h-full fixed top-0 left-0 z-20 flex items-center justify-center">
      <div className="w-full h-full bg-black opacity-30 absolute" />
      <div className="w-fit h-fit p-10 bg-white z-10 relative flex flex-col gap-4">
        <button
          className="absolute right-2 top-2 cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
        <div className="flex gap-4">
          <Input label="Name" />
          <Radio label="Gender" options={genderOptions} />
          <Select label="Relationship" options={relationshipOptions} />
          <Input label="Phone Number" />
        </div>
        <div className="flex justify-end">
          <Button name="Save" onClick={clickSave} />
        </div>
      </div>
    </div>
  );
};

export default AddModal;
