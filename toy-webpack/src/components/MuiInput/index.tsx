import * as React from "react";
import { OutlinedInput, InputProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

import StyledCommonInputWrapper from "../../styles/CommonInput/StyledCommonInputWrapper";
import StyledCommonLabel from "../../styles/CommonInput/StyledCommonLabel";
import StyledFormHelperText from "../..//styles/CommonInput/SyltedCommonFormHelperText";
import StyledCommonInputRequiredLabel from "../../styles/CommonInput/StyledCommonInputRequiredLabel";
import { InputStyle } from "../../styles/CommonInput/StyledCommonInputWrapper";

interface CommonInputProps extends InputProps {
  label?: string;
  labelVisible?: boolean;
  helperTextVisible?: boolean;
  inputName: string;
  defaultValue?: string | number;
  onChangeHandler?: (...args: any[]) => void;
  onBlurHandler?: (...args: any[]) => void;
  // inputWidth: string;
  // inputWidth랑 field bg는 다르긴해..
}

// 1. rule
// 2. setState
// 5. clean up

const MuiInput = ({
  label,
  labelVisible = true,
  helperTextVisible = true,
  labelStyle,
  fieldStyle,
  inputName,
  defaultValue = null,
  onChangeHandler,
  onBlurHandler,
  disabled,
  required,
  ...rest
}: CommonInputProps & InputStyle) => {
  const {
    control,
    setValue,
    formState: { errors: formErrors },
  } = useFormContext();

  return (
    <Controller
      name={inputName}
      control={control}
      defaultValue={defaultValue}
      rules={{
        required: {
          value: true,
          message: "This field is mandatory.",
        },
        maxLength: {
          value: 5,
          message: `This field must be less than 5 characters.`,
        },
      }}
      shouldUnregister={true}
      disabled={disabled}
      render={({
        field: { ref, ...field }, // onChange, onBlur, value, disabled, name, ref
        fieldState: { invalid, error, ...fieldState },
        formState,
      }) => {
        // const handlerProps = {
        //   ...field,
        // ...props,
        // setDisabled,
        // };

        return (
          <>
            <StyledCommonInputWrapper
              fieldStyle={fieldStyle}
              labelStyle={labelStyle}
            >
              {labelVisible && (
                <StyledCommonLabel
                  fieldStyle={fieldStyle}
                  labelStyle={labelStyle}
                  htmlFor={inputName}
                >
                  {!!required && (
                    <StyledCommonInputRequiredLabel>
                      *
                    </StyledCommonInputRequiredLabel>
                  )}
                  {label}
                </StyledCommonLabel>
              )}
              <OutlinedInput
                {...field}
                {...rest}
                id={inputName}
                inputRef={ref}
                name={inputName}
                sx={{
                  input: {
                    padding: "0px 14px",
                    height: "100%",
                    WebkitTextFillColor: disabled
                      ? "#222 !important"
                      : "inherit",
                  },
                  "&.MuiOutlinedInput-root": {
                    height: "30px",
                    fontSize: "12px",
                    fontWeight: "500",
                    width: fieldStyle.width,
                    backgroundColor: disabled
                      ? "#F9F9F9"
                      : `${fieldStyle?.["background-color"] || "white"}`,
                    "&.Mui-focused fieldset": {
                      border: "1.2px solid #264B9F !important",
                      boxShadow: "0px 0px 4px 0px #8BBCE9 !important",
                    },
                    "&.Mui-error fieldset": {
                      border: "1.2px solid #C24D4D !important",
                    },
                    "&:hover:not(.Mui-focused):not(.Mui-disabled) fieldset":
                      !formErrors?.[inputName]?.message && {
                        borderColor: "#8E9396 !important",
                      },
                    // useState넣고 다시보기
                    // "&.Mui-disabled fieldset": {
                    // color: "red !important",
                    //   backgroundColor: "unset !important",
                    // },
                  },
                  fieldset: {
                    borderColor: "#D9D9D9 !important",
                  },
                }}
                error={invalid}
                onChange={(e) => onChangeHandler?.({ e, ...field })}
                onBlur={(e) => onBlurHandler?.({ e, ...field })}
                // onFocus={(e) => onFocusHandler?.({ e, ...field })}
                // onInvalid={(e) => onInvalidHandler?.({ e, ...field })}
                // onKeyDown={(e) =>onKeyDownHandler?.({ e, ...field })}
                // onKeyUp={(e) => onKeyUpHandler?.({ e, ...field })}
              />
            </StyledCommonInputWrapper>
            {helperTextVisible && (
              <StyledFormHelperText
                fieldStyle={fieldStyle}
                labelStyle={labelStyle}
              >
                {error?.message}
              </StyledFormHelperText>
            )}
          </>
        );
      }}
    />
  );
};

export default MuiInput;
