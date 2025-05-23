import {lightTheme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    swippleContainer: {
      backgroundColor: theme.input,
      borderRadius: 10,
      padding: 16,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 4,
    },
    deleteButton: {
      minHeight: '100%',
      backgroundColor: 'red',
      borderRadius: 10,
    },
    completeButton: {minHeight: '100%', borderRadius: 10},
    taskContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    taskTitle: {width: '90%', color: theme.text},

    taskScrollView: {
      paddingHorizontal: 10,
    },
    tasksScrollViewContent: {
      paddingBlockEnd: 100,
      gap: 10,
      paddingBlockStart: 15,
    },
  });
