import {lightTheme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    langButtonContainer: {
      gap: 10,
      marginBlockEnd: 20,
    },
    langButton: {
      height: 50,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'center',
      backgroundColor: theme.langButton,
      alignItems: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    langNameText: {
      fontSize: 16,
      color: theme.text,
    },
  });
