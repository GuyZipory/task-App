import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Text, TextInput} from 'react-native';
import '@/i18n';
import {persistor, store} from '@/redux/store';
import RootNavigator from '@/navigation';

const queryClient = new QueryClient();

export default function App() {
  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.style = {fontFamily: 'Rubik'};
  (TextInput as any).defaultProps = (TextInput as any).defaultProps || {};
  (TextInput as any).defaultProps.style = {fontFamily: 'Rubik'};

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}
