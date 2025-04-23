import {Text} from 'react-native';
import {View} from 'react-native';
import {useTheme} from '@/theme';
import {useTranslation} from 'react-i18next';
import {getStyles} from '@/components/tasksSummary/style';
import {Task} from '@/types';
import {useMemo} from 'react';

type TasksSummaryProps = {
  tasks: Task[];
};

export const TasksSummary = ({tasks}: TasksSummaryProps) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const styles = getStyles(theme);

  const {finishedTasks, unfinishedTasks} = useMemo(() => {
    const finishedTasks = tasks.filter(task => task.isComplete).length;
    const unfinishedTasks = tasks.filter(task => !task.isComplete).length;
    return {finishedTasks, unfinishedTasks};
  }, [tasks]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{t('tasksSummary')}</Text>
      <View style={styles.subContainer}>
        <View style={styles.taskStatContainer}>
          <Text>{t('totalTasks')}</Text>
          <Text>{tasks.length}</Text>
        </View>
        <View
          style={{
            ...styles.taskStatContainer,
            borderRightWidth: 1,
            borderLeftWidth: 1,
            borderColor: 'lightgray',
          }}>
          <Text>{t('completedTasks')}</Text>
          <Text>{finishedTasks}</Text>
        </View>
        <View style={styles.taskStatContainer}>
          <Text>{t('pendingTasks')}</Text>
          <Text>{unfinishedTasks}</Text>
        </View>
      </View>
    </View>
  );
};
