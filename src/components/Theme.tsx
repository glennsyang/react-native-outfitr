import React, { ReactNode } from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  ThemeProvider as ReStyleThemeProvider,
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const palette = {
  green: "#2CB9B0",
  white: "white",
  orange: "#FE5E33",
  yellow: "#FFC641",
  pink: "#FF87A2",
  violet: "#442CB9",
  lightBlue: "#BFEAF5",
};

export const theme = {
  colors: {
    primary: palette.green,
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",
    danger: "#F00558",
    info: "#808080",
    title: "#0C0D34",
    text: "rgba(12, 13, 52, 0.7)",
    textContrast: palette.white,
    background: palette.white,
    background2: "#F6F6F6",
    graph1: palette.orange,
    graph2: palette.yellow,
    drawer1: palette.orange,
    drawer2: palette.yellow,
    drawer3: palette.pink,
    drawer4: palette.violet,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      color: "background",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    title3: {
      fontSize: 16,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Medium",
      color: "text",
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Semibold",
      color: "secondary",
    },
  },
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ReStyleThemeProvider {...{ theme }}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
