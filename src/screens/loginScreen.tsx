import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {useAuth} from '@/api/hooks/useAuth';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
export type FormData = z.infer<typeof schema>;

export default function LoginScreen() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({resolver: zodResolver(schema)});

  const {onSubmit, registerUser} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setValue('email', text)}
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setValue('password', text)}
      />
      {errors.password && (
        <Text style={styles.error}>{errors.password.message}</Text>
      )}

      <Button title="Login" onPress={handleSubmit(onSubmit)} />
      <Button title="Register" onPress={handleSubmit(registerUser)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  title: {fontSize: 24, marginBottom: 16, textAlign: 'center'},
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  error: {color: 'red', marginBottom: 8},
});
