import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@/screens/homeScreen';
import {View} from 'react-native';
import BottomMenu from '@/components/bottomMenu';
import {useTasks} from '@/api/hooks/useTasks';
import SettingsScreen from '@/screens/settingsScreen';
import APICallScreen from '@/screens/apiCallScreen';

export type AppStackParamList = {
  Home: undefined;
  Settings: undefined;
  APICallScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  const {tasks, deleteTask, toggleTaskComplete, addTask} = useTasks();

  return (
    <View style={{flex: 1}}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home">
          {() => (
            <>
              <HomeScreen
                deleteTask={deleteTask}
                tasks={tasks}
                toggleTaskComplete={toggleTaskComplete}
              />
              <BottomMenu addTask={addTask} />
            </>
          )}
        </Stack.Screen>
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="APICallScreen" component={APICallScreen} />
      </Stack.Navigator>
    </View>
  );
}
