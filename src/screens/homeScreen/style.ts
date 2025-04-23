import {lightTheme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    rootContainer: {
      backgroundColor: theme.background,
      flex: 1,
      paddingBlockStart: 20,
      alignItems: 'center',
    },

    taskScrollView: {
      paddingHorizontal: 10,
      width: '95%',
    },
    tasksScrollViewContent: {
      paddingBlockEnd: 100,
      gap: 10,
      paddingBlockStart: 15,
    },
    welcomeText: {
      fontSize: 20,
      textAlign: 'center',
      marginVertical: 20,
      color: theme.text,
    },
  });
