import {styles} from '@/components/bottomMenu/style';
import {AppStackParamList} from '@/navigation/stacks/appStack';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Modal, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {IconButton, Text, TextInput} from 'react-native-paper';

type Props = {
  addTask: (taskName: string) => void;
};

const BottomMenu = ({addTask}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const {t} = useTranslation();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
    setTaskName('');
  };

  return (
    <>
      <View style={styles.container}>
        <IconButton
          icon="web"
          size={24}
          onPress={() => {
            navigation.navigate('APICallScreen');
          }}
        />
        <TouchableOpacity style={styles.fabContainer} onPress={toggleModal}>
          <IconButton
            icon="plus"
            iconColor="white"
            size={30}
            style={styles.fab}
          />
        </TouchableOpacity>
        <IconButton
          icon="cog"
          size={24}
          onPress={() => {
            navigation.navigate('Settings');
          }}
        />
      </View>

      <Modal transparent animationType="slide" visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text variant="titleMedium">{t('addTask')}</Text>
              <IconButton
                icon="close"
                size={24}
                onPress={toggleModal}
                style={styles.closeButton}
              />
            </View>
            <TextInput
              label={t('taskName')}
              mode="outlined"
              style={styles.input}
              value={taskName}
              onChangeText={(text: React.SetStateAction<string>) =>
                setTaskName(text)
              }
              placeholder={t('enterTaskName')}
            />
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => {
                addTask(taskName);
                toggleModal();
              }}>
              {t('addTask')}
            </Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default BottomMenu;
