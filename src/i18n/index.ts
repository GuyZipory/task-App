import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import he from './he.json';
import {LanguageOptionsSelectObject} from '@/types';

export const languageOptionsForSelectArray: LanguageOptionsSelectObject[] = [
  {value: 'he', label: 'hebrew'},
  {value: 'en', label: 'english'},
];

i18n.use(initReactI18next).init({
  supportedLngs: ['en', 'he'],
  fallbackLng: 'en',
  resources: {
    en: {translation: en},
    he: {translation: he},
  },
  interpolation: {escapeValue: false},
});

export default i18n;
