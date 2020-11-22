import React from "react";
import Svg, { Path } from "react-native-svg";

import { useTheme } from "../../components";

interface TopCurveProps {
  footerHeight: number;
}

const TopCurve = ({ footerHeight }: TopCurveProps) => {
  const theme = useTheme();
  const size = theme.borderRadii.xl;
  return (
    <Svg
      width={size}
      height={size}
      style={{
        position: "absolute",
        bottom: footerHeight,
        right: 0,
        backgroundColor: "rgba(100, 200, 300, 0.5)",
      }}
    >
      <Path d="" fill={theme.colors.secondary} />
    </Svg>
  );
};

export default TopCurve;
