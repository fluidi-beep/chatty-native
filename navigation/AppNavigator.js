import React from "react";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";

// import App screens
import HomeScreen from "../screens/HomeScreen";

// import Auth screens
import SignIn from "../screens/SignIn";

const AppStack = createStackNavigator({ Home: HomeScreen });

import MainTabNavigator from "./MainTabNavigator";

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator
  })
);
