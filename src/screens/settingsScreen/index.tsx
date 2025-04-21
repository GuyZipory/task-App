import {Text, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {RootState} from '@/redux/store';
import {Button} from 'react-native-paper';
import {PageWrapper} from '@/components/common/pageWrapper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '@/navigation/stacks/appStack';
import {logout} from '@/redux/authReducer';
import {styles} from '@/screens/settingsScreen/style';

export default function SettingsScreen() {
  const {t} = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <PageWrapper pageTitle={t('settings')} goBack={() => navigation.goBack()}>
      <View style={styles.rootContainer}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => dispatch(logout())}>
          {t('logOut')}
        </Button>
      </View>
    </PageWrapper>
  );
}
