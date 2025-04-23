import {Text, TouchableOpacity} from 'react-native';
import {View} from 'react-native';
import {Icon} from '@rneui/themed';
import {useTheme} from '@/theme';
import {languageOptionsForSelectArray} from '@/i18n';
import {LanguageOptions} from '@/types';
import {useTranslation} from 'react-i18next';
import {getStyles} from '@/components/langTouchableOptions/style';

type langTouchableOptions = {
  selectedLanguage: string;
  handleLanguageChange: (lang: LanguageOptions) => void;
};

export const LangTouchableOptions = ({
  selectedLanguage,
  handleLanguageChange,
}: langTouchableOptions) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={styles.langButtonContainer}>
      {languageOptionsForSelectArray.map(item => (
        <TouchableOpacity
          key={item.value}
          style={styles.langButton}
          onPress={() => handleLanguageChange(item.value)}>
          {item.value === selectedLanguage && selectedLanguage === 'he' && (
            <Icon name="check" size={24} color={theme.black} />
          )}
          <Text style={styles.langNameText} key={item.label}>
            {t(item.label)}
          </Text>
          {item.value === selectedLanguage && selectedLanguage === 'en' && (
            <Icon name="check" size={24} color={theme.black} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};
