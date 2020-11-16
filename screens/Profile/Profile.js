import React, { useState, useEffect } from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import styles from '../style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ConnectyCube from 'react-native-connectycube'
import { Fontisto } from '@expo/vector-icons'

function Profile({ navigation, route }) {
  const [message, setMessage] = useState('')
  const [log, setLog] = useState('')
  const [full_name, setFull_name] = useState('')
  const [menu, setMenu] = useState('menuNone')
  const { login } = route.params

  useEffect(() => {
    const searchParams = { login: login }

    ConnectyCube.users
      .get(searchParams)
      .then((result) => {
        setLog(result.user.login)
        setFull_name(result.user.full_name)
      })
      .catch((error) => {})
  }, [login])

  function signOut() {
    ConnectyCube.logout().catch((error) => {
      setMessage('Something went wrong...Try again!')
    })
    navigation.navigate('SignIn')
  }

  function closeMenu() {
    setMenu('menuNone')
  }

  function openMenu() {
    setMenu('menuVisible')
  }

  return (
    <View
      style={[
        styles.container,
        { alignItems: 'stretch', justifyContent: 'space-between' },
      ]}
    >
      {!log && !full_name ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : (
        <>
          <View style={{ alignItems: 'center' }}>
            <Image
              style={styles.avatar}
              source={require('../../assets/avatar1.png')}
            />
            <View style={{ alignItems: 'center' }}>
              <View>
                <Text style={styles.h3}>Login</Text>
                <Text style={styles.name}>{log}</Text>
              </View>
              <View style={styles.circle}></View>
              <View>
                <Text style={styles.h3}>Full name</Text>
                <Text style={styles.name}>{full_name}</Text>
              </View>
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.messagePrompt}>{message}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonDark]}
              onPress={openMenu}
            >
              <Text style={styles.btnText}>Settings</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.menu, styles[menu]]}>
            <View style={styles.closeMenu}>
              <Fontisto
                name="close-a"
                size={32}
                color="#fff"
                onPress={closeMenu}
              />
            </View>
            <View>
              <FlatList
                data={[{ key: 'Sign out', func: signOut }]}
                renderItem={({ item }) => (
                  <Text onPress={item.func} style={styles.item}>
                    {item.key}
                  </Text>
                )}
              />
            </View>
          </View>
        </>
      )}
    </View>
  )
}

export default Profile
