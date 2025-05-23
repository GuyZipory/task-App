import {useTheme} from '@/theme';
import {lightTheme} from '@/theme/theme';
import React from 'react';
import {Text, StyleSheet} from 'react-native';

type Props = {
  text: string;
  highlight: string;
};

export default function HighlightText({text, highlight}: Props) {
  const theme = useTheme();
  const styles = getStyles(theme);
  if (!highlight) return <Text>{text}</Text>;

  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);

  return (
    <Text>
      {parts.map((part, i) => {
        const isMatch = part.toLowerCase() === highlight.toLowerCase();
        return (
          <Text
            key={`part-${i}`}
            style={isMatch ? styles.highlight : undefined}>
            {part}
          </Text>
        );
      })}
    </Text>
  );
}

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    highlight: {
      backgroundColor: 'yellow',
      fontWeight: 'bold',
      color: theme.highlightText,
    },
  });
