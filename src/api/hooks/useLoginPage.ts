import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import {setUser} from '@/redux/authReducer';
import {useTranslation} from 'react-i18next';
import i18n from '@/i18n';
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
export type FormData = z.infer<typeof schema>;

export const useLoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {setValue, handleSubmit, formState, control} = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const user = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );
      dispatch(
        setUser({
          email: user.user.email ?? '',
          uid: user.user.uid,
        }),
      );
    } catch (err: any) {
      Toast.show({
        type: 'error',
        text1: t('loginFailed'),
        text2: t('invalidEmailOrPassword'),
      });
    }
  };

  const registerUser = async (data: any) => {
    try {
      await auth().createUserWithEmailAndPassword(data.email, data.password);
      Toast.show({
        type: 'success',
        text1: t('registrationSuccessful'),
        text2: t('youCanNowLogInWithYourCredentials'),
      });
      setValue('password', '');
      setIsRegister(false);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Toast.show({
          type: 'error',
          text1: t('emailAlreadyInUse'),
          text2: t('pleaseEnterDifferentEmail'),
        });
      } else {
        Toast.show({
          type: 'error',
          text1: t('registerFailed'),
          text2: t('pleaseTryAgainLater'),
        });
      }
    }
  };

  return {
    onSubmit,
    registerUser,
    isRegister,
    setIsRegister,
    handleSubmit,
    setValue,
    formState,
    control,
  };
};
