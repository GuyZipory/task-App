import {lightTheme} from '@/theme/theme';
import {StyleSheet} from 'react-native';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    rootContainer: {
      backgroundColor: theme.background,
      flex: 1,
      paddingBlockStart: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    button: {
      backgroundColor: theme.button,
      borderRadius: 6,
      height: 44,
      width: '90%',
      marginBlockEnd: 20,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: '#00000022',
      justifyContent: 'flex-end',
    },
    modalContent: {
      backgroundColor: theme.backgroundMenu,
      paddingHorizontal: 20,
      paddingBlockEnd: 30,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    closeButton: {alignSelf: 'flex-end'},
    modalHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
    langButtonContainer: {
      gap: 10,
      marginBlockEnd: 20,
    },
    settingContainer: {
      height: '70%',
      borderWidth: 1,
      width: '90%',
      marginVertical: 20,
      borderRadius: 10,
      gap: 20,
      borderColor: 'lightgray',
      paddingVertical: 20,
    },
    settingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
    },
    settingNameContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
    },
    settingName: {
      color: theme.text,
      fontSize: 16,
    },
    currentLangContainer: {
      marginVertical: 10,
      borderWidth: 1,
      padding: 5,
      borderRadius: 10,
      borderColor: theme.black,
    },
    headerTitle: {
      fontSize: 18,
      color: theme.text,
    },
    langNameText: {
      fontSize: 16,
      color: theme.text,
    },
  });
