import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {
  Box,
  ScrollableContent,
  Header,
  makeStyles,
  Text,
} from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { Theme } from "../../components/Theme";

import Graph, { DataPoint } from "./Graph/Graph";
import Transaction from "./Transaction";

const footerHeight = Dimensions.get("window").width / 3;
const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  scrollView: {
    paddingBottom: footerHeight,
  },
}));
const startDate = new Date("2019-09-03").getTime();
const numberOfMonths = 6;
const data: DataPoint[] = [
  {
    date: new Date("2019-10-03").getTime(),
    value: 139.42,
    color: "primary",
    id: 245672,
  },
  {
    date: new Date("2019-12-02").getTime(),
    value: 281.23,
    color: "graph1",
    id: 245673,
  },
  {
    date: new Date("2020-02-03").getTime(),
    value: 198.54,
    color: "graph2",
    id: 245674,
  },
];

const TransactionHistory = ({
  navigation,
}: HomeNavigationProps<"TransactionHistory">) => {
  const styles = useStyles();
  return (
    <ScrollableContent>
      <Box flex={1} backgroundColor="background">
        <Header
          left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
          right={{ icon: "share", onPress: () => true }}
          title="Transaction History"
        />
        <Box padding="m" flex={1}>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-end"
          >
            <Box>
              <Text variant="header" color="secondary" opacity={0.3}>
                TOTAL SPENT
              </Text>
              <Text variant="title1">$619,19</Text>
            </Box>
            <Box backgroundColor="primaryLight" borderRadius="m" padding="s">
              <Text color="primary">All Time</Text>
            </Box>
          </Box>
          <Graph
            data={data}
            startDate={startDate}
            numberOfMonths={numberOfMonths}
          />
          <ScrollView
            contentContainerStyle={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {data.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </ScrollView>
        </Box>
      </Box>
    </ScrollableContent>
  );
};

export default TransactionHistory;
