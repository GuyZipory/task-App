import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  goBackButton: {position: 'absolute', left: 10},
  pageTitle: {color: 'black', fontSize: 30},
  childContainer: {flex: 1, backgroundColor: 'white'},
});
