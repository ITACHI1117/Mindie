import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  LayoutChangeEvent,
} from "react-native";
import React, { useState } from "react";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export type TabButtonType = {
  title: string;
};

type TabButtonProps = {
  buttons: TabButtonType[];
  selectedTab: number;
  setSelectedTab: (index: number) => void;
};
const TabButtons = ({
  buttons,
  selectedTab,
  setSelectedTab,
}: TabButtonProps) => {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });
  const buttonWidth = dimensions.width / buttons.length;

  const tabPositionX = useSharedValue(0);

  const onTabbaerLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const handelPress = (index: number) => {
    setSelectedTab(index);
  };

  const onTabPress = (index: number) => {
    tabPositionX.value = withTiming(buttonWidth * index, {}, () => {
      runOnJS(handelPress)(index);
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  return (
    <View
      style={{
        backgroundColor: "#181818",
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            position: "absolute",
            backgroundColor: "white",
            borderRadius: 15,
            marginHorizontal: 5,
            height: dimensions.height - 10,
            width: buttonWidth - 10,
          },
        ]}
      ></Animated.View>
      <View onLayout={onTabbaerLayout} style={{ flexDirection: "row" }}>
        {buttons.map((button, index) => {
          const color = selectedTab == index ? "gray" : "gray";
          return (
            <TouchableOpacity
              key={index}
              style={{ flex: 1, paddingVertical: 15 }}
              onPress={() => onTabPress(index)}
            >
              <Text
                style={{
                  color: color,
                  alignSelf: "center",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                {button.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabButtons;
