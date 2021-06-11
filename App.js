import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import CalendarStack from "./src/pages/CalendarStack";
import ListView from "./src/pages/ListView";
import DataAnalysis from "./src/pages/DataAnalysis";
import SettingsScreen from "./src/pages/SettingsScreen";

const Tab = createMaterialTopTabNavigator();

const createIcon = (name) => {
  return <Ionicons name={name} size={25} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarPosition="bottom"
        tabBarOptions={{
          showIcon: true,
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="Calendar"
          component={CalendarStack}
          options={{
            tabBarIcon: () => createIcon("calendar"),
          }}
        />
        <Tab.Screen
          name="List"
          component={ListView}
          options={{
            tabBarIcon: () => createIcon("ios-list"),
          }}
        />
        <Tab.Screen
          name="Data"
          component={DataAnalysis}
          options={{
            tabBarIcon: () => createIcon("analytics"),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: () => createIcon("settings"),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
