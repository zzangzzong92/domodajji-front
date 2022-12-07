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

const theme: DefaultTheme = {
  colors,
  inputStyle,
};

export default theme;
