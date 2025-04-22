import {RootState} from '@/redux/store';
import {darkTheme, lightTheme} from '@/theme/theme';
import React, {createContext, useContext} from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';

const ThemeContext = createContext(darkTheme); // fallback

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const darkMode = useSelector(
    (state: RootState) => state.appSettings.darkMode,
  );
  const scheme =
    darkMode !== null ? (darkMode ? 'dark' : 'light') : useColorScheme();
  const theme = scheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
