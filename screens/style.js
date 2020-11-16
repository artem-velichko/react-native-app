import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22343C',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  square: {
    width: 45,
    height: 45,
    marginVertical: 30,
    backgroundColor: '#40DF9F',
    borderRadius: 12,
  },
  h1: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
  },
  text: {
    marginVertical: 20,
    fontSize: 24,
    color: '#96A7AF',
  },
  button: {
    minWidth: 100,
    alignItems: 'center',
    padding: 25,
    marginVertical: 20,
    borderRadius: 12,
  },
  buttonLight: {
    backgroundColor: '#40DF9F',
  },
  buttonDark: {
    backgroundColor: '#286053',
  },
  btnWithIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btnText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    marginLeft: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    color: '#fff',
    borderBottomWidth: 3,
    borderBottomColor: '#1f2c32',
    marginBottom: 10,
    fontSize: 18,
  },
  messagePrompt: {
    fontSize: 13,
    color: '#FF575F',
  },
  avatar: {
    width: 125,
    height: 125,
    marginVertical: 30,
  },
  h3: {
    textTransform: 'uppercase',
    paddingBottom: 10,
    color: '#96A7AF',
    letterSpacing: 2,
    textAlign: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  circle: {
    width: 10,
    height: 10,
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: '#96A7AF',
  },
  menu: {
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    zIndex: 1000,
    justifyContent: 'center',
    backgroundColor: '#286053',
  },
  menuVisible: {
    display: 'flex',
    position: 'absolute',
  },
  menuNone: {
    display: 'none',
    position: 'relative',
  },
  item: {
    textAlign: 'center',
    padding: 20,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  closeMenu: {
    position: 'absolute',
    right: 30,
    top: 30,
  },
  loading: {
    fontSize: 20,
    color: '#fff',
    padding: 50,
  },
})

export default styles
