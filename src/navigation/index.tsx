import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import AppStack from './stacks/appStack';
import {RootState} from '@/redux/store';
import {SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import {useTranslation} from 'react-i18next';
import {useTheme} from '@/theme';

export default function RootNavigator() {
  const user = useSelector((state: RootState) => state.auth.user);
  const language = useSelector(
    (state: RootState) => state.appSettings.language,
  );
  const {i18n} = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    if (user?.uid && language !== currentLang) {
      i18n.changeLanguage(language);
    }
  }, [language, currentLang, i18n]);

  const theme = useTheme();

  return (
    <SafeAreaView
      style={{flex: 1, paddingBottom: 30, backgroundColor: theme.background}}>
      {user?.uid ? <AppStack /> : <AuthStack />}
      <Toast position="bottom" />
    </SafeAreaView>
  );
}
