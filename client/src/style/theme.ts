// eslint-disable-next-line import/named
import { css, DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    sampleBlue: "blue",
    backgroundColor: "white",
    selectedBlue: "#157efb",
    hoverGrey: "#656565",
    hoverBackgroundGrey: "#e8e8e8",
    innerBackground: "#edf1f3;"
  },
  font: {
    selectedBold: "400"
  },
  line: {
    commonBorder: "1px solid #d4d9dd"
  },
  media: {
    breakPoint: "2560px",
    midBreakPoint: "1600px",
    minFont: "1rem",
    bigFont: "2rem"
    // smallSize: css``,
  }
};

export default theme;
