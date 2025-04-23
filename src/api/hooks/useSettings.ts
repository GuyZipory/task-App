import {languageOptionsForSelectArray} from '@/i18n';
import {setLanguage} from '@/redux/appSettingsReducer';
import {RootState} from '@/redux/store';
import {LanguageOptions} from '@/types';
import {useState, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

export const useSettings = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const language = useSelector(
    (state: RootState) => state.appSettings.language,
  );
  const darkMode = useSelector(
    (state: RootState) => state.appSettings.darkMode,
  );
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleLanguageChange = (lang: LanguageOptions) => {
    dispatch(setLanguage(lang));
    toggleModal();
  };

  const currentLanguage = useMemo(() => {
    const currentLang = languageOptionsForSelectArray.find(
      item => item.value === language,
    );
    return currentLang;
  }, [language]);

  return {
    darkMode,
    handleLanguageChange,
    modalVisible,
    currentLanguage,
    toggleModal,
    language,
  };
};
