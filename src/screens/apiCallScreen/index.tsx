import {ScrollView, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native-paper';
import {PageWrapper} from '@/components/common/pageWrapper';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackParamList} from '@/navigation/stacks/appStack';
import {useTodos} from '@/api/hooks/useTodos';
import {useDebounce} from '@/utils/useDebounce';
import {styles} from '@/screens/apiCallScreen/style';
import {Swappable} from '@/components/common/swappable';

export default function APICallScreen() {
  const [search, setSearch] = useState('');
  const {t} = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const debouncedSearch = useDebounce(search, 500);
  const {data, isLoading, isRefetching} = useTodos({filter: debouncedSearch});

  return (
    <PageWrapper pageTitle={t('apiCall')} goBack={() => navigation.goBack()}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <TextInput
          placeholder="Search todos"
          value={search}
          onChangeText={setSearch}
          style={styles.searchBar}
        />
        <ScrollView
          style={styles.taskScrollView}
          contentContainerStyle={styles.tasksScrollViewContent}>
          {isLoading || isRefetching ? (
            <ActivityIndicator />
          ) : (
            data.map(task => (
              <Swappable
                key={task.id}
                task={task}
                disableSwipe
                searchText={search}
              />
            ))
          )}
        </ScrollView>
      </View>
    </PageWrapper>
  );
}
