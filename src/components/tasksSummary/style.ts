import {lightTheme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    rootContainer: {
      backgroundColor: 'white',
      borderRadius: 10,
      width: '90%',
      alignItems: 'center',
      marginBlockEnd: 10,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    subContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
    },
    title: {
      marginBlockStart: 10,
      marginBlockEnd: 10,
      fontSize: 20,
    },
    taskStatContainer: {
      width: '33%',
      alignItems: 'center',
      paddingBlock: 10,
      gap: 5,
    },
  });
