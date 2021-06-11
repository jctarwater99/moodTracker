import * as React from "react";
import { Text, View } from "react-native";
import SettingsScreen from "./SettingsScreen";
import EnterDataScreen from "./EnterDataScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SettingsStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{ headerShown: false }}
    >
      {<Stack.Screen name="Settings" component={SettingsScreen} />}
      {<Stack.Screen name="Enter" component={EnterDataScreen} />}
    </Stack.Navigator>
  );
};

export default CalendarStack;
