import React from 'react';
import {useSelector} from 'react-redux';
import AuthStack from './stacks/authStack';
import AppStack from './stacks/appStack';
import {RootState} from '@/redux/store';
import {SafeAreaView} from 'react-native';

export default function RootNavigator() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <SafeAreaView style={{flex: 1}}>
      {user ? <AppStack /> : <AuthStack />}
    </SafeAreaView>
  );
}
