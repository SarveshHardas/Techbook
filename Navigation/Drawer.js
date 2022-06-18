import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./Stack";
import FeedBack from "../Screen/FeedBack";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Feedback" component={FeedBack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
