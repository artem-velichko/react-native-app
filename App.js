import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import ConnectyCube from 'react-native-connectycube'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/Home/Home'
import SignUp from './screens/SignUp/SignUp'
import SignIn from './screens/SignIn/SignIn'
import Profile from './screens/Profile/Profile'
import Credentials from './modules/credentials'

const Stack = createStackNavigator()

export default function App() {
  useEffect(() => {
    const CREDENTIALS = Credentials()

    ConnectyCube.init(CREDENTIALS)

    ConnectyCube.createSession()
      .then(() => {})
      .catch((error) => {})
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#286053',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
