import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {Button, IconButton, Switch} from 'react-native-paper';
import {PageWrapper} from '@/components/common/pageWrapper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '@/navigation/stacks/appStack';
import {logout} from '@/redux/authReducer';
import {Icon} from '@rneui/themed';
import {useTheme} from '@/theme';
import {getStyles} from '@/screens/settingsScreen/style';
import {setDarkMode} from '@/redux/appSettingsReducer';
import {useSettings} from '@/api/hooks/useSettings';
import {LangTouchableOptions} from '@/components/langTouchableOptions';

export default function SettingsScreen() {
  const {t} = useTranslation();
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const dispatch = useDispatch();
  const {
    darkMode,
    handleLanguageChange,
    modalVisible,
    currentLanguage,
    toggleModal,
    language,
  } = useSettings();

  return (
    <>
      <PageWrapper pageTitle={t('settings')} goBack={() => navigation.goBack()}>
        <View style={styles.rootContainer}>
          <View style={styles.settingContainer}>
            <View style={styles.settingRow}>
              <View style={styles.settingNameContainer}>
                <Icon name="language" size={24} color={theme.black} />
                <Text style={styles.settingName}>{t('language')}</Text>
              </View>
              <TouchableOpacity
                onPress={() => toggleModal()}
                style={styles.currentLangContainer}>
                <Text style={styles.settingName}>
                  {t(currentLanguage?.label ?? '')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.settingRow}>
              <View style={styles.settingNameContainer}>
                <Icon name="brush" size={24} color={theme.black} />
                <Text style={styles.settingName}>{t('darkMode')}</Text>
              </View>
              <Switch
                value={darkMode}
                color={theme.button}
                onChange={() => {
                  dispatch(setDarkMode(!darkMode));
                }}
              />
            </View>
          </View>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => dispatch(logout())}>
            {t('logOut')}
          </Button>
        </View>
      </PageWrapper>

      <Modal transparent animationType="slide" visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.headerTitle}>{t('chooseLanguage')}</Text>
              <IconButton
                icon="close"
                size={24}
                onPress={toggleModal}
                style={styles.closeButton}
                iconColor={theme.black}
              />
            </View>
            <LangTouchableOptions
              selectedLanguage={language}
              handleLanguageChange={handleLanguageChange}
            />
          </View>
        </View>
      </Modal>
    </>
  );
}
