import styled from "@emotion/styled";

export interface LabelStyle {
  direction?: "row";
  gap?: string;
  wrap?: true;
  width?: string;
}

export interface FieldStyle {
  width: string;
  "background-color"?: string;
}

export interface InputStyle {
  labelStyle?: LabelStyle;
  fieldStyle: FieldStyle;
}

const StyledCommonInputWrapper = styled.div<InputStyle>`
  display: flex;
  width: fit-content;

  ${(props) => props?.labelStyle?.gap && `gap: ${props.labelStyle.gap};`}

  ${(props) =>
    props?.labelStyle?.direction === "row"
      ? `
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `
      : `
      flex-direction: column;
      justify-content: center;<props className="labelStyleTest"></props>
    `}
`;

// width: ${(props) => props.width};

/**
 *   width: ${(props) =>
    props?.labelStyle?.width
      ? props.labelStyle.width
      : // ? Math.max(props.width, props.labelStyle.width)
        props.width};
 */
export default StyledCommonInputWrapper;
