import * as React from "react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import MuiInput from "../../components/MuiInput";

const Labs = () => {
  const controller = useForm();
  const clickButton = (): void => {
    console.log("submitted");
  };

  const [dis, setDis] = useState(false);
  return (
    <div className="p-19">
      <FormProvider {...controller}>
        <form onSubmit={controller.handleSubmit(clickButton)}>
          <MuiInput
            inputName="helloinput"
            label="Hello"
            defaultValue="hello"
            // helperTextVisible={false}
            disabled={dis}
            // required
            onBlurHandler={({ ...props }) => console.log("blur")}
            onChangeHandler={({ e, onChange, ...props }) => {
              onChange(e?.target?.value);
              console.log("change", props);
            }}
            labelStyle={{
              direction: "row",
              wrap: true,
            }}
            fieldStyle={{
              width: "100px",
              // "background-color": "rgba(255, 182, 193, 0.3)",
            }}
            inputProps={{ maxLength: 5 }}
          />
          <button className="border cursor-pointer" type="submit">
            Submit
          </button>
        </form>
      </FormProvider>
      <button
        className="border cursor-pointer"
        onClick={() => setDis((prev) => !prev)}
      >
        set disabled
      </button>
    </div>
  );
};

export default Labs;
