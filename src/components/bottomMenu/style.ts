import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    elevation: 10,
    position: 'absolute',
    bottom: 10,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  fabContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 25,
    borderRadius: 35,
    padding: 4,
    elevation: 5,
  },
  fab: {
    backgroundColor: '#0af',
    borderRadius: 30,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000022',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    height: '30%',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  button: {backgroundColor: '#0af', borderRadius: 6, height: 44},
  input: {marginBottom: 10},
  closeButton: {alignSelf: 'flex-end'},
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
