import * as React from "react";
import { Text, View } from "react-native";
import CalendarScreen from "./CalendarScreen";
import DayScreen from "./DayScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const CalendarStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="CalendarScreen"
      screenOptions={{ headerShown: false }}
    >
      {<Stack.Screen name="Calendar" component={CalendarScreen} />}
      {<Stack.Screen name="Day" component={DayScreen} />}
    </Stack.Navigator>
  );
};

export default CalendarStack;
