import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import AppStack from './stacks/appStack';
import {RootState} from '@/redux/store';
import {SafeAreaView} from 'react-native';
import Toast from 'react-native-toast-message';
import {useTranslation} from 'react-i18next';

export default function RootNavigator() {
  const user = useSelector((state: RootState) => state.auth.user);
  const {i18n} = useTranslation();
  const currentLang = i18n.language;
  useEffect(() => {
    if (user?.uid && user?.defaultLanguage !== currentLang) {
      i18n.changeLanguage(user.defaultLanguage);
    }
  }, [user?.defaultLanguage, currentLang, i18n]);

  return (
    <SafeAreaView style={{flex: 1, marginBottom: 30}}>
      {user?.uid ? <AppStack /> : <AuthStack />}
      <Toast position="bottom" />
    </SafeAreaView>
  );
}
