import React from "react";
import { Feather as Icon } from "@expo/vector-icons";

import { Text, Box, Theme } from "./Theme";

export interface RoundedIconProps {
  name: string;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIcon;
