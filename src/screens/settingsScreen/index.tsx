import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {RootState} from '@/redux/store';
import {Button, IconButton, Switch} from 'react-native-paper';
import {PageWrapper} from '@/components/common/pageWrapper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '@/navigation/stacks/appStack';
import {logout} from '@/redux/authReducer';
import {LanguageOptions} from '@/types';
import {languageOptionsForSelectArray} from '@/i18n';
import {Icon} from '@rneui/themed';
import {useTheme} from '@/theme';
import {getStyles} from '@/screens/settingsScreen/style';
import {setDarkMode, setLanguage} from '@/redux/appSettingsReducer';

export default function SettingsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const {t} = useTranslation();
  const theme = useTheme();
  const styles = getStyles(theme);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const language = useSelector(
    (state: RootState) => state.appSettings.language,
  );
  const darkMode = useSelector(
    (state: RootState) => state.appSettings.darkMode,
  );
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleLanguageChange = (lang: LanguageOptions) => {
    dispatch(setLanguage(lang));
    toggleModal();
  };

  const currentLanguage = useMemo(() => {
    const currentLang = languageOptionsForSelectArray.find(
      item => item.value === language,
    );
    return currentLang;
  }, [language]);

  type renderLangTouchableOptions = {
    selectedLanguage: string;
  };

  const RenderLangTouchableOptions = ({
    selectedLanguage,
  }: renderLangTouchableOptions) => {
    return (
      <View style={styles.langButtonContainer}>
        {languageOptionsForSelectArray.map(item => (
          <>
            <TouchableOpacity
              key={item.value}
              style={styles.langButton}
              onPress={() => handleLanguageChange(item.value)}>
              {item.value === selectedLanguage && selectedLanguage === 'he' && (
                <Icon name="check" size={24} color={theme.black} />
              )}
              <Text style={styles.langNameText}>{t(item.label)}</Text>
              {item.value === selectedLanguage && selectedLanguage === 'en' && (
                <Icon name="check" size={24} color={theme.black} />
              )}
            </TouchableOpacity>
          </>
        ))}
      </View>
    );
  };

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
            <RenderLangTouchableOptions selectedLanguage={language} />
          </View>
        </View>
      </Modal>
    </>
  );
}
