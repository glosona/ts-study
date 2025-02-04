import * as React from "react";
import { useState } from "react";
import Button from "./components/Button/index";
import Select from "./components/Select/index";
import Input from "./components/Input/index";
import AddModal from "./components/Modal/index";
import { selectOption } from "./components/Select/index";
import DataView from "./components/DataView";

const App = () => {
  const [showAdd, setShowAdd] = useState(false);
  const searchOptions: selectOption[] = [
    { label: "Name", value: "name" },
    { label: "Gender", value: "gender" },
    { label: "Relationship", value: "relationship" },
    { label: "Phone Number", value: "phone_num" },
  ];

  return (
    <>
      <div className="flex flex-col p-7 gap-5">
        <h1>Phone Book</h1>
        <div className="flex justify-between">
          <div className="flex gap-x-3">
            <Select options={searchOptions} />
            <Input placeholder="Search" />
          </div>
          <div className="flex gap-x-3">
            <Button name="Search" onClick={() => console.log("clicked!")} />
            <Button name="Add" onClick={() => setShowAdd(true)} />
          </div>
        </div>
        <DataView />
      </div>
      {showAdd && <AddModal onClose={() => setShowAdd(false)} />}
    </>
  );
};

export default App;
