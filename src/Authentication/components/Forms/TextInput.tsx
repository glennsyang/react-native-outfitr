/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { TextInput as RNTextInput } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";

import { Box, theme } from "../../../components";

interface TextInputProps {
  placeholder: string;
  icon: string;
  validator: (input: string) => boolean;
}

const SIZE = theme.borderRadii.m * 2;
const Valid = true;
const Invalid = false;
const Pristine = null;
type InputState = typeof Valid | typeof Invalid | typeof Pristine;

const TextInput = ({ icon, placeholder }: TextInputProps) => {
  const [state, setState] = useState<InputState>(Pristine);
  const color =
    state === Pristine ? "darkGrey" : state === Valid ? "primary" : "danger";
  return (
    <Box
      flexDirection="row"
      height={48}
      borderRadius="s"
      borderColor={color}
      borderWidth={1}
      alignItems="center"
    >
      <Box padding="s">
        <Icon name={icon} size={16} {...{ color }} />
      </Box>
      <RNTextInput
        underlineColorAndroid="transparent"
        placeholderTextColor="#151624"
        {...{ placeholder }}
      />
      {(state === Valid || state === Invalid) && (
        <Box height={SIZE} width={SIZE} borderRadius="m">
          <Icon
            name={state === Valid ? "check" : "x"}
            color="white"
            size={16}
          />
        </Box>
      )}
    </Box>
  );
};

export default TextInput;
