import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ConnectyCube from 'react-native-connectycube'
import { View, Text, TextInput } from 'react-native'
import styles from '../style'
import { FontAwesome5 } from '@expo/vector-icons'

function SignIn({ navigation }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const userCredentials = { login, password }

  function loginIntoApp() {
    ConnectyCube.login(userCredentials)
      .then((user) => {
        navigation.navigate('Profile', { login: login })
        setLogin('')
        setPassword('')
      })
      .catch((error) => {
        if (error.info?.errors) {
          setMessage("User with this login don't exist. Try again!")
        }
      })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.messagePrompt}>{message}</Text>
      <View style={styles.inputWrap}>
        <TextInput
          style={[styles.textInput, { flex: 1 }]}
          placeholder="Enter login"
          placeholderTextColor={'#96A7AF'}
          onChangeText={(text) => setLogin(text)}
          value={login}
        />
      </View>
      <View style={styles.inputWrap}>
        <TextInput
          style={[styles.textInput, { flex: 1 }]}
          placeholder="Enter password"
          placeholderTextColor={'#96A7AF'}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.buttonLight, styles.btnWithIcon]}
        onPress={loginIntoApp}
      >
        <Text style={styles.btnText}>Sign In</Text>
        <FontAwesome5 name="long-arrow-alt-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

export default SignIn
