import { Platform, StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';

export default StyleSheet.create({
  mainWrapper: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    gap: 4,
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.DancingScriptBold,
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
  disableBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  activeBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    backgroundColor: '#F8F8F9',
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 25,
    marginVertical: 4,
    paddingHorizontal: 24,
    paddingVertical: Platform.select({
      android: 12,
      ios: 24,
      default: 12,
    }),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
