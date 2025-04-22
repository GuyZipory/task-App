import {Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {getStyles} from '@/components/common/pageWrapper/style';
import {useTheme} from '@/theme';

type PageWrapperProps = {
  children: React.ReactNode;
  pageTitle?: string;
  goBack?: () => void;
};

export const PageWrapper = ({
  children,
  pageTitle,
  goBack,
}: PageWrapperProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        {goBack && (
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={goBack}
            iconColor={theme.black}
            style={styles.goBackButton}
          />
        )}
        <Text style={styles.pageTitle}>{pageTitle}</Text>
      </View>
      <View style={styles.childContainer}>{children}</View>
    </View>
  );
};
