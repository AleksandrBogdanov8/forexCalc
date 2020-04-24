import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { MainScreen } from "../screens/MainScreen";
import { ChangeBalance } from "../screens/ChangeBalance";
import { AddScreen } from "../screens/AddScreen";
import { ChangeItem } from "../screens/ChangeItem";

import { THEME } from "../theme";

export const AppNavigation = ({}) => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: "Forex Calculation",
            headerTintColor: THEME.BG_COLOR,
            headerStyle: {
              backgroundColor: THEME.MAIN_COLOR,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "300",
            },
          }}
        />

        <Stack.Screen
          name="Balance"
          component={ChangeBalance}
          options={{
            title: "Change Balance",
            headerTintColor: THEME.BG_COLOR,
            headerStyle: {
              backgroundColor: THEME.MAIN_COLOR,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "300",
            },
          }}
        />

        <Stack.Screen
          name="Add"
          component={AddScreen}
          options={{
            title: "Add screen",
            headerTintColor: THEME.BG_COLOR,
            headerStyle: {
              backgroundColor: THEME.MAIN_COLOR,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "300",
            },
          }}
        />

        <Stack.Screen
          name="Change"
          component={ChangeItem}
          options={{
            title: "Change Item",
            headerTintColor: THEME.BG_COLOR,
            headerStyle: {
              backgroundColor: THEME.MAIN_COLOR,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "300",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
