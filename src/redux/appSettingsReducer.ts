import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {LanguageOptions} from '@/types';

type appSettingsState = {
  language: LanguageOptions;
  darkMode: boolean;
};

const initialState: appSettingsState = {
  language: 'en',
  darkMode: false,
};

const appSettingsSlice = createSlice({
  name: 'appSettingsSlice',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageOptions>) => {
      state.language = action.payload;
    },
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

export const {setLanguage, setDarkMode} = appSettingsSlice.actions;
export default appSettingsSlice;
