import styled from "@emotion/styled";
import { FormHelperText } from "@mui/material";
import { InputStyle } from "./StyledCommonInputWrapper";

const StyledFormHelperText = styled(FormHelperText)<InputStyle>`
  width: ${(props) => props.fieldStyle.width};
  color: #ff2424;
  font-size: 11px;
  font-weight: 400;
  min-height: 11px;
  height: fit-content;
  margin-bottom: 3px;
  line-height: 1;
  text-wrap: "wrap";

  ${(props) =>
    props?.labelStyle?.direction === "row" &&
    `
      margin-left: ${
        parseInt(props?.labelStyle?.width || "50px") +
        parseInt(props?.labelStyle?.gap || "0px")
      }px;
    `}
`;

export default StyledFormHelperText;
