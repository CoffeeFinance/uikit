import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#3eb489",
  primaryBright: "#aaf0d0",
  primaryDark: "#3eb489",
  secondary: "#896045",
  success: "#4a2c2b",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#fcfaf8",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#E9EAEB",
  tertiary: "#ffffff",
  text: "#6f4e36",
  textDisabled: "#BDC2C4",
  textSubtle: "#8c6448",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#896045",
  background: "#fcfaf8",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#E9EAEB",
  primaryDark: "#3eb489",
  tertiary: "#ffffff",
  text: "#6f4e36",
  textDisabled: "#BDC2C4",
  textSubtle: "#8c6448",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
