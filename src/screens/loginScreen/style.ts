import {lightTheme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      gap: 15,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 35,
      marginBottom: 16,
      textAlign: 'center',
      color: theme.button,
    },
    createAccountButton: {
      marginBlock: 15,
      fontSize: 14,
      alignContent: 'flex-end',
    },
    input: {
      height: 44,
      paddingHorizontal: 10,
      backgroundColor: theme.input,
      borderRadius: 6,
      color: theme.text,
    },
    button: {backgroundColor: theme.button, borderRadius: 6, height: 44},
    error: {color: 'red', marginBottom: 8},
    createAccountButtonText: {
      color: theme.button,
      fontSize: 14,
      textAlign: 'center',
    },
  });
