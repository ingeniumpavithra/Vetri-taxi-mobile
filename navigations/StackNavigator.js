import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "../screens/Home";
import Second from "../screens/Second";

import LocalTrip from "../screens/localTrip";
import MyModal from "../screens/MyModal"; 
import Login from "../screens/Login";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="localTrip" component={LocalTrip} />
        <Stack.Screen name="Log in" component={Login} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={MyModal} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
