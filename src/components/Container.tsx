import React, { ReactNode } from "react";
import { Image, Dimensions } from "react-native";

import theme, { Box } from "./Theme";

export const assets = [require("./assets/patterns/pattern1.png")];
const { width } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;
interface ContainerProps {
  children: ReactNode;
}

const Container = () => {
  return (
    <Box flex={1}>
      <Box borderBottomLeftRadius="xl" overflow="hidden" height={height * 0.61}>
        <Image
          source={assets[0]}
          style={{
            width,
            height,
            borderBottomLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
    </Box>
  );
};

export default Container;
