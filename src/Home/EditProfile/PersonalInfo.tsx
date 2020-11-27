import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import TextInput from "../../components/Forms/TextInput";
import { Box, Text } from "../../components";

import CheckBoxGroup from "./CheckBoxGroup";

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

const PersonalInfo = () => {
  return (
    <ScrollView>
      <Box padding="m">
        <Text variant="body" marginBottom="m">
          Account Information
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="user"
            placeholder="Name"
            autoCapitalize="none"
            autoCompleteType="name"
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="lock"
            placeholder="Enter your Password"
            autoCompleteType="password"
            autoCapitalize="none"
            secureTextEntry
          />
        </Box>
        <Box marginBottom="m">
          <TextInput
            icon="map-pin"
            placeholder="Address"
            autoCapitalize="none"
            autoCompleteType="street-address"
          />
        </Box>
        <CheckBoxGroup options={genders} radio />
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
