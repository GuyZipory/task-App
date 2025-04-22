import {getStyles} from '@/components/common/swappable/style';
import {useTheme} from '@/theme';
import {Task} from '@/types';
import HighlightText from '@/utils/highLighter';
import {Icon, ListItem, Button as RNButton} from '@rneui/themed';
import {useTranslation} from 'react-i18next';

type Props = {
  task: Task;
  disableSwipe?: boolean;
  deleteTask?: (taskId: string) => void;
  toggleTaskComplete?: (taskId: string) => void;
  searchText?: string;
};

export const Swappable = ({
  task,
  deleteTask,
  toggleTaskComplete,
  disableSwipe = false,
  searchText = '',
}: Props) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <ListItem.Swipeable
      containerStyle={styles.swippleContainer}
      disabled={disableSwipe}
      leftContent={
        disableSwipe
          ? null
          : reset => (
              <RNButton
                title={t('delete')}
                onPress={() => {
                  reset();
                  deleteTask?.(task.id);
                }}
                icon={{name: 'delete', color: 'white'}}
                buttonStyle={styles.deleteButton}
              />
            )
      }
      rightContent={
        disableSwipe
          ? null
          : reset => (
              <RNButton
                title={t('complete')}
                onPress={() => {
                  toggleTaskComplete?.(task.id);
                  reset();
                }}
                icon={{name: 'check', color: 'white'}}
                buttonStyle={styles.completeButton}
              />
            )
      }>
      <ListItem.Content key={task.id} style={styles.taskContent}>
        <ListItem.Title key={task.id} style={styles.taskTitle}>
          <HighlightText text={task.name} highlight={searchText} />
        </ListItem.Title>
        {task.isComplete && <Icon name="check" color={theme.checkColor} />}
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};
