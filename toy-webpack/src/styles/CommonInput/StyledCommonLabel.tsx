import styled from "@emotion/styled";
import { InputLabel } from "@mui/material";
import { InputStyle } from "./StyledCommonInputWrapper";

const StyledCommonLabel = styled(InputLabel)<InputStyle>`
  color: #595656;
  min-height: 14px;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 11px;
  text-wrap: ${(props) => props?.labelStyle?.wrap && "wrap"};
  ${(props) =>
    props?.labelStyle?.direction === "row"
      ? `
          display: flex;
          justify-content: start;
          align-items: center;
          width: ${props?.labelStyle?.width || "50px"};
        `
      : `
          padding: 0 0 3px 0;
          width: ${props.fieldStyle.width};
        `};
`;

export default StyledCommonLabel;
