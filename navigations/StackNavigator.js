import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import Home from "../screens/Home";
import onedaytrip from "../screens/onedaytrip"
import LocalTrip from "../screens/localTrip";
import Normaltaxi from "../screens/Normaltaxi"; 
import Login from "../screens/Login";
import Billonedaytrip from "../screens/Billonedaytrip"
import Hillstrip from "../screens/Hillstrip";
import {BillingContextProvider} from "../context/BillingContextProvider";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <BillingContextProvider>
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Group>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="localTrip" component={LocalTrip} />
        <Stack.Screen name="onedaytrip" component={onedaytrip} />
        <Stack.Screen name="Billonedaytrip" component={Billonedaytrip} />
        <Stack.Screen name="Hillstrip" component={Hillstrip} />
        <Stack.Screen name="Normaltaxi" component={Normaltaxi} />
      </Stack.Group>
    </Stack.Navigator>
    </BillingContextProvider>
  );
};
export default StackNavigator;

const styles = StyleSheet.create({});
