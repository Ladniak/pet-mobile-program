import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainWrapper: {
    margin: 20,
    marginTop: 70,
  },
  titleContainer: {
    gap: 4,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
  },
  welcomeText: {
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EAE9FB',
    padding: 4,
    marginBottom: 40,
    borderRadius: 20,
  },
  loginBtn: {
    alignItems: 'center',
    backgroundColor: '#F8F8F9',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  regBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 4,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  input: {
    padding: 0,
  },
  enterBtn: {
    borderRadius: 25,
    backgroundColor: '#7A71BA',
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 70,
  },
  enterText: {
    color: 'white',
  },
});
