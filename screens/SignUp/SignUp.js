import React, { useState, useContext } from 'react'
import ConnectyCube from 'react-native-connectycube'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { View, Text, TextInput } from 'react-native'
import styles from '../style'
import { FontAwesome5 } from '@expo/vector-icons'

function SignUp({ navigation, route }) {
  const [login, setLogin] = useState('')
  const [full_name, setFull_name] = useState('')
  const [password, setPassword] = useState('')
  const [colorLogin, setColorLogin] = useState('#625B39')
  const [colorName, setColorName] = useState('#625B39')
  const [colorLock, setColorLock] = useState('#623A42')
  const [message, setMessage] = useState('')

  const userProfile = { login, password, full_name }

  function submitUserData() {
    if (!(login && full_name && password)) {
      setMessage("You haven't completed all the fields. Do it, please!")
      setTimeout(() => setMessage(''), 5000)
      return
    }
    if (password.length < 8) {
      setMessage('At least 8 characters for password.')
      return
    }
    ConnectyCube.users
      .signup(userProfile)
      .then((user) => {
        if (user) {
          navigation.navigate('SignIn')
          setLogin('')
          setFull_name('')
          setPassword('')
          setMessage('')
          setColorLogin('#625B39')
          setColorName('#625B39')
          setColorLock('#623A42')
        }
      })
      .catch((error) => {
        if (error.info?.errors?.login) {
          setMessage('User with this login already exists. Please, change!')
        }
      })
  }

  function handleChangeLogin(text) {
    setLogin(text)
    if (text.trim().length >= 1) {
      setColorLogin('#FF974A')
    } else {
      setColorLogin('#625B39')
    }
  }

  function handleChangeName(text) {
    setFull_name(text)

    if (text.trim().length >= 1) {
      setColorName('#FF974A')
    } else {
      setColorName('#625B39')
    }
  }

  function handleChangePassword(text) {
    setPassword(text)

    if (text.includes(' ')) {
      setTimeout(() => setMessage('Spaces are not allowed in the password!'), 0)
      setTimeout(() => setMessage('Password is not correct!'), 2000)
      setTimeout(() => setMessage(''), 4000)
      return
    }

    if (text.trim().length > 7) {
      setColorLock('#FF575F')
    } else {
      setColorLock('#623A42')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.square}></View>
      <Text style={styles.h1}>Hello!</Text>
      <Text style={styles.text}>Let's introduce</Text>
      <Text style={styles.messagePrompt}>{message}</Text>
      <View style={styles.inputWrap}>
        <FontAwesome5 name="user-alt" size={28} color={colorLogin} />
        <TextInput
          style={[styles.textInput, { flex: 1 }]}
          placeholder="Enter login"
          placeholderTextColor={'#96A7AF'}
          onChangeText={(text) => handleChangeLogin(text)}
          value={login}
        />
      </View>
      <View style={styles.inputWrap}>
        <FontAwesome5 name="user-alt" size={28} color={colorName} />
        <TextInput
          style={[styles.textInput, { flex: 1 }]}
          placeholder="Enter full name"
          placeholderTextColor={'#96A7AF'}
          onChangeText={(text) => handleChangeName(text)}
          value={full_name}
        />
      </View>
      <View style={styles.inputWrap}>
        <FontAwesome5 name="lock" size={28} color={colorLock} />
        <TextInput
          style={[styles.textInput, { flex: 1 }]}
          placeholder="Enter password"
          placeholderTextColor={'#96A7AF'}
          onChangeText={(text) => handleChangePassword(text)}
          value={password}
          secureTextEntry={true}
          textContentType="password"
        />
      </View>
      <TouchableOpacity
        style={[styles.button, styles.buttonLight]}
        onPress={submitUserData}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SignUp
