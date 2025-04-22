import {lightTheme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: theme.backgroundMenu,
      paddingVertical: 10,
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 20,
      alignSelf: 'center',
      elevation: 10,
      position: 'absolute',
      bottom: 10,
      width: '80%',
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    fabContainer: {
      position: 'absolute',
      alignSelf: 'center',
      bottom: 25,
      borderRadius: 35,
      padding: 4,
      elevation: 5,
    },
    fab: {
      backgroundColor: theme.button,
      borderRadius: 30,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: '#00000022',
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: theme.backgroundMenu,
      padding: 20,
      height: '30%',
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    button: {backgroundColor: theme.button, borderRadius: 6, height: 44},
    input: {
      marginBottom: 40,
      backgroundColor: theme.input,
      color: theme.text,
      borderWidth: 1,
      height: 44,
      borderRadius: 10,
      paddingHorizontal: 10,
      borderColor: theme.text,
    },
    closeButton: {alignSelf: 'flex-end'},
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
    },
    headerTitle: {
      fontSize: 18,
      color: theme.text,
    },
  });
