import {lightTheme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    headerContainer: {
      height: 60,
      backgroundColor: theme.background,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    goBackButton: {position: 'absolute', left: 10},
    pageTitle: {fontSize: 30, color: theme.text},
    childContainer: {flex: 1, backgroundColor: 'white'},
  });
