import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    blackColor: string;
    darkGreyColor: string;
    lightGreyColor: string;
    redColor: string;
    blueColor: string;
    darkBlueColor: string;
    boxBorder: string;
    borderRadius: string;
    whiteBox: string;
  }
}
