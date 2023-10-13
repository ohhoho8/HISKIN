import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Care, Challenge, Community, Info } from "../screens";
import MainTab from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
  const theme = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: theme.headerTintColor,
        cardStyle: { backgroundColor: theme.backgroundColor },
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="Main" component={MainTab} />
      <Stack.Screen name="Care" component={Care} />
      <Stack.Screen name="Challenge" component={Challenge} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="Info" component={Info} />
    </Stack.Navigator>
  );
};

export default MainStack;
