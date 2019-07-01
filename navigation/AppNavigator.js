import React from 'react'
import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator
} from 'react-navigation'

import LoadingScreen from '../screens/LoadingScreen'

// import App screens
import Home from '../screens/HomeScreen'

// import Auth screens
import SignIn from '../screens/SignInScreen'

const AppStack = createStackNavigator({ Home })
const AuthStack = createStackNavigator({ SignIn })

import MainTabNavigator from './MainTabNavigator'

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading: LoadingScreen,
            App: Home,
            Auth: AuthStack
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
)
