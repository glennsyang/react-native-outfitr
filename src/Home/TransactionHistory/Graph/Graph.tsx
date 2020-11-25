import React, { useLayoutEffect, useRef } from "react";
import { Dimensions } from "react-native";
import { lerp } from "react-native-redash";
import moment from "moment";
import {
  Transition,
  Transitioning,
  TransitioningView,
} from "react-native-reanimated";

import { useTheme, Box } from "../../../components";
import { Theme } from "../../../components/Theme";

import Underlay, { MARGIN } from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;
const transition = (
  <Transition.Together>
    <Transition.In
      type="slide-bottom"
      durationMs={650}
      interpolation="easeInOut"
    />
  </Transition.Together>
);

export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
  id: number;
}

interface GraphProps {
  data: DataPoint[];
  startDate: number;
  numberOfMonths: number;
}

const Graph = ({ data, startDate, numberOfMonths }: GraphProps) => {
  const ref = useRef<TransitioningView>(null);
  const theme = useTheme();
  useLayoutEffect(() => {
    ref.current?.animateNextTransition();
  }, []);
  const canvasWidth = wWidth - theme.spacing.m * 2;
  const canvaHeight = canvasWidth * aspectRatio;
  const width = canvasWidth - theme.spacing[MARGIN];
  const height = canvaHeight - theme.spacing[MARGIN];
  const step = width / numberOfMonths;
  const values = data.map((p) => p.value);
  //const dates = data.map((p) => p.date);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
    <Box marginTop="xl" paddingBottom={MARGIN} paddingLeft={MARGIN}>
      <Underlay
        minY={minY}
        maxY={maxY}
        startDate={startDate}
        numberOfMonths={numberOfMonths}
        step={step}
      />
      <Transitioning.View
        style={{ width, height, overflow: "hidden" }}
        ref={ref}
        transition={transition}
      >
        {data.map((point) => {
          const i = Math.round(
            moment.duration(moment(point.date).diff(startDate)).asMonths()
          );
          return (
            <Box
              key={point.id}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
            >
              <Box
                backgroundColor={point.color}
                position="absolute"
                opacity={0.1}
                top={0}
                bottom={0}
                borderTopLeftRadius="m"
                borderTopRightRadius="m"
                left={theme.spacing.m}
                right={theme.spacing.m}
              />
              <Box
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius="m"
              />
            </Box>
          );
        })}
      </Transitioning.View>
    </Box>
  );
};

export default Graph;
