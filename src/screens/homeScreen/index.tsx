import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {RootState} from '@/redux/store';
import {Task} from '@/types';
import {getStyles} from '@/screens/homeScreen/style';
import {Swappable} from '@/components/common/swappable';
import {useTheme} from '@/theme';

type Props = {
  tasks: Task[];
  deleteTask?: (taskId: string) => void;
  toggleTaskComplete?: (taskId: string) => void;
};

export default function HomeScreen({
  tasks,
  deleteTask,
  toggleTaskComplete,
}: Props) {
  const {t} = useTranslation();
  const user = useSelector((state: RootState) => state.auth.user);
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.welcomeText}>
        {`${t('welcomeBack')}, ${user?.email}`}
      </Text>
      <ScrollView
        style={styles.taskScrollView}
        contentContainerStyle={styles.tasksScrollViewContent}>
        {tasks.map(task => (
          <Swappable
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskComplete={toggleTaskComplete}
          />
        ))}
      </ScrollView>
    </View>
  );
}
