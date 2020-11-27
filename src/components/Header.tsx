import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text } from "./Theme";
import RoundedIconButton from "./RoundedIconButton";
import { View } from "react-native";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right?: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({ title, left, right, dark }: HeaderProps): JSX.Element => {
  const insets = useSafeAreaInsets();
  const color = dark ? "background" : "secondary";
  const backgroundColor = dark ? "secondary" : undefined;
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        size={44}
        iconRatio={0.4}
        name={left.icon}
        onPress={left.onPress}
        align={backgroundColor === undefined ? "flex-start" : "center"}
        {...{ color, backgroundColor }}
      />
      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>
      {right ? (
        <RoundedIconButton
          size={44}
          iconRatio={0.4}
          name={right.icon}
          onPress={right.onPress}
          align={backgroundColor === undefined ? "flex-end" : "center"}
          {...{ color, backgroundColor }}
        />
      ) : (
          <View style={{ width: 44 }} />
        )}
    </Box>
  );
};

Header.defaultProps = {
  dark: false,
};

export default Header;
