import {getStyles} from '@/components/bottomMenu/style';
import {AppStackParamList} from '@/navigation/stacks/appStack';
import {useTheme} from '@/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Modal, TouchableOpacity, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import {IconButton, Text} from 'react-native-paper';

type Props = {
  addTask: (taskName: string) => void;
};

const BottomMenu = ({addTask}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [taskName, setTaskName] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const {t} = useTranslation();
  const theme = useTheme();
  const styles = getStyles(theme);
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
          iconColor={theme.text}
          onPress={() => {
            navigation.navigate('APICallScreen');
          }}
        />
        <TouchableOpacity style={styles.fabContainer} onPress={toggleModal}>
          <IconButton
            icon="plus"
            size={30}
            style={styles.fab}
            iconColor={'white'}
          />
        </TouchableOpacity>
        <IconButton
          icon="cog"
          size={24}
          onPress={() => {
            navigation.navigate('Settings');
          }}
          iconColor={theme.text}
        />
      </View>

      <Modal transparent animationType="slide" visible={modalVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text variant="titleMedium" style={styles.headerTitle}>
                {t('addTask')}
              </Text>
              <IconButton
                icon="close"
                size={24}
                onPress={toggleModal}
                style={styles.closeButton}
                iconColor={theme.text}
              />
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text: React.SetStateAction<string>) =>
                setTaskName(text)
              }
              value={taskName}
              placeholder={t('taskName')}
              autoCapitalize="none"
              placeholderTextColor={theme.text}
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
