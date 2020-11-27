import React from "react";
import { DrawerActions } from "@react-navigation/native";
import { Dimensions } from "react-native";

import { Box, Header, Text, useTheme } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";

import Tabs from "./Tabs";
import Configuration from "./Configuration";
import PersonalInfo from "./PersonalInfo";

const { width } = Dimensions.get("window");
const tabs = [
  { id: "configuration", title: "Configuration" },
  { id: "info", title: "Personal Info" },
];

const EditProfile = ({ navigation }: HomeNavigationProps<"EditProfile">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="background">
      <Box flex={0.2} backgroundColor="background">
        <Box
          position="absolute"
          top={0}
          right={0}
          left={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="Edit Profile"
            left={{
              icon: "menu",
              onPress: () => navigation.dispatch(DrawerActions.openDrawer()),
            }}
            dark
          />
        </Box>
      </Box>
      <Box>
        <Box
          position="absolute"
          left={width / 2 - 50}
          top={-50}
          backgroundColor="primary"
          width={100}
          height={100}
          style={{ borderRadius: 50 }}
        />
        <Box marginVertical="m" style={{ marginTop: 50 + theme.spacing.m }}>
          <Text variant="title1" textAlign="center">
            Mike Peter
          </Text>
          <Text variant="body" textAlign="center">
            mikepeter@gmail.com
          </Text>
        </Box>
      </Box>
      <Tabs tabs={tabs}>
        <Configuration />
        <PersonalInfo />
      </Tabs>
    </Box>
  );
};

export default EditProfile;
