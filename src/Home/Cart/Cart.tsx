import React from "react";
import { Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

import { Box, useTheme } from "../../components";

const { width } = Dimensions.get("window");
const height = (682 * width) / 375;
const minHeight = (228 * width) / 375;

const Cart = () => {
  const theme = useTheme();
  const translateY = useSharedValue(0);
  const onGestureEvent = useAnimatedGestureHandler<{ y: number }>({
    onStart: (event, ctx) => {
      ctx.y = translateY.value;
    },
    onActive: ({ translationY }, ctx) => {
      translateY.value = ctx.y + translationY;
    },
    onEnd: ({ velocityY }) => {
      const dest = snapPoint(translateY.value, velocityY, [
        -(height - minHeight),
        0,
      ]);
      translateY.value = withSpring(dest);
    },
  });
  const style = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <Box flex={1} backgroundColor="secondary">
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height,
              backgroundColor: "white",
              borderBottomLeftRadius: theme.borderRadii.xl,
              borderBottomRightRadius: theme.borderRadii.xl,
            },
            style,
          ]}
        />
      </PanGestureHandler>
    </Box>
  );
};

export default Cart;
