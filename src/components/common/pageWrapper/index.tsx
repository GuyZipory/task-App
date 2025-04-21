import {Text, View} from 'react-native';
import React from 'react';
import {IconButton} from 'react-native-paper';
import {styles} from '@/components/common/pageWrapper/style';

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
  return (
    <View style={{flex: 1}}>
      <View style={styles.headerContainer}>
        {goBack && (
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={goBack}
            iconColor="black"
            style={styles.goBackButton}
          />
        )}
        <Text style={styles.pageTitle}>{pageTitle}</Text>
      </View>
      <View style={styles.childContainer}>{children}</View>
    </View>
  );
};
