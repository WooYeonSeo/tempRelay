// eslint-disable-next-line import/named
import { FlattenInterpolation } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      sampleBlue: string;
      backgroundColor: string;
      selectedBlue: string;
      hoverBackgroundGrey: string;
      hoverGrey: string;
      innerBackground: string;
    };
    font: {
      selectedBold: "400";
    };
    line: {
      commonBorder: string;
    };
    media: {
      breakPoint: string;
      midBreakPoint: string;
      minFont: string;
      bigFont: string;
      // smallSize: FlattenInterpolation<ThemeProps<DefaultTheme>>
    };
  }
}
