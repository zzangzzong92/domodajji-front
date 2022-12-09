import { DefaultTheme, css } from "styled-components";

const colors = {
  black: "#2D2D2D",
  white: "#ffffff",
  gray: "#4f4f4f",
  lightblue: "#ebeff5",
};

const inputStyle = css`
  height: 55px;
  line-height: 55px;
  border-radius: 4px;
  background-color: ${colors.lightblue};
`;

const fontStyle = css`
  font-family: "NanumSquare_ac";
  font-style: normal;
  font-weight: 700;
`;

const theme: DefaultTheme = {
  colors,
  fontStyle,
  inputStyle,
};

export default theme;
