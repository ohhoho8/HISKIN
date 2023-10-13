import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Challenge, Care, Community, Info } from "../screens";

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Challeng" component={Challenge} />
      <Tab.Screen name="Care" component={Care} />
      <Tab.Screen name="Community" component={Community} />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
};

export default MainTab;
