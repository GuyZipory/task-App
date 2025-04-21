import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {backgroundColor: 'white', flex: 1, paddingBlockStart: 20},

  taskScrollView: {
    paddingHorizontal: 10,
    flex: 1,
    width: '100%',
  },
  tasksScrollViewContent: {
    paddingBlockEnd: 100,
    gap: 10,
    paddingBlockStart: 15,
  },
  searchBar: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '90%',
    margin: 20,
  },
});
