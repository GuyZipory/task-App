import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useLoginPage} from '@/api/hooks/useLoginPage';
import {styles} from '@/screens/loginScreen/style';
import {Button} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {Controller} from 'react-hook-form';

export default function LoginScreen() {
  const {t} = useTranslation();
  const {
    onSubmit,
    registerUser,
    isRegister,
    setIsRegister,
    handleSubmit,
    setValue,
    formState: {errors},
    control,
  } = useLoginPage();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isRegister ? t('register') : t('login')}
      </Text>

      <Controller
        control={control}
        name="email"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            placeholder={t('email')}
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            secureTextEntry
            placeholder={t('password')}
          />
        )}
      />
      <View>
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
        <Button
          style={styles.createAccountButton}
          onPress={() => {
            setIsRegister(!isRegister);
          }}>
          {isRegister ? t('alreadyHaveAnAccount') : t('createNewAccount')}
        </Button>
      </View>
      <Button
        style={styles.button}
        mode="contained"
        onPress={handleSubmit(isRegister ? registerUser : onSubmit)}>
        {isRegister ? t('register') : t('login')}
      </Button>
    </View>
  );
}
