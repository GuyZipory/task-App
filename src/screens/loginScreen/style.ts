import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    gap: 15,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 35,
    marginBottom: 16,
    textAlign: 'center',
    color: '#0af',
  },
  createAccountButton: {
    marginBlock: 15,
    fontSize: 14,
    alignContent: 'flex-end',
  },
  input: {
    height: 44,
    paddingHorizontal: 10,
    backgroundColor: '#F1F5FF',
    borderRadius: 6,
  },
  button: {backgroundColor: '#0af', borderRadius: 6, height: 44},
  error: {color: 'red', marginBottom: 8},
});
