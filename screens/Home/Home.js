import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from '../style'
import { FontAwesome5 } from '@expo/vector-icons'

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.square}></View>
      <Text style={styles.h1}>Welcome!</Text>
      <Text style={styles.text}>Sign in to continue</Text>
      <TouchableOpacity
        style={[styles.button, styles.buttonLight, styles.btnWithIcon]}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Text style={styles.btnText}>Sign In</Text>
        <FontAwesome5 name="long-arrow-alt-right" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.buttonDark]}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={styles.btnText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home
