import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Box, Text } from "./Theme";
import RoundedIconButton from "./RoundedIconButton";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
}

const Header = ({ title, left, right }: HeaderProps): JSX.Element => {
  const insets = useSafeAreaInsets();
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        size={24}
        name={left.icon}
        color="white"
        backgroundColor="secondary"
        onPress={left.onPress}
      />
      <Text variant="header" color="white">
        {title.toUpperCase()}
      </Text>
      <RoundedIconButton
        size={24}
        name={right.icon}
        color="white"
        backgroundColor="secondary"
        onPress={right.onPress}
      />
    </Box>
  );
};

export default Header;
