import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {backgroundColor: 'white', flex: 1, paddingBlockStart: 20},

  taskScrollView: {
    paddingHorizontal: 10,
  },
  tasksScrollViewContent: {
    paddingBlockEnd: 100,
    gap: 10,
    paddingBlockStart: 15,
  },
  welcomeText: {fontSize: 20, textAlign: 'center', marginVertical: 20},
});
