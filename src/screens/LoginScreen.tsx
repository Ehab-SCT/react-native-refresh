import {StyleSheet, Text,  View} from 'react-native';
import React, {FC} from 'react';
import {CommonActions, NavigationProp} from '@react-navigation/native';
import AInput from '../components/AInput';
import { useForm } from "react-hook-form";
import AButton from '../components/AButton';
import { z, ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { loginAction } from '../store/redux/userAction';
import { useUserStore } from '../store/zostands/store';


const loginSchema: ZodSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  password: z.string()
    .min(6, { message: 'Password must be at least 6 characters long' })
    .regex(/[!@#$%^&*(),.?":{}|<>]/, { message: 'Password must contain at least one special character' }),
});

interface LoginFormValues {
  firstName: string;
  password: string;
}


interface LoginProps {
  navigation: NavigationProp<any>;
}

const LoginScreen: FC<LoginProps> = ({navigation}) => {
  const despatch = useDispatch()
  const setUsername = useUserStore(state => state.setUsername)

 const { control, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    defaultValues: {
      firstName: '',
      password: ''
    },
    resolver: zodResolver(loginSchema),

  });

  const onSubmit = (data: any) => {
    console.log(data);
        despatch(loginAction(data.firstName))
        setUsername(data.firstName);
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'Auth',
          },
        ],
      }),
    )

  };

  return (
    <View style={styles.container}>
      <Text style={{paddingHorizontal: 20}}>LoginScreen</Text>
      <AInput control={control} errors={errors} name="firstName" />
      <AInput control={control} errors={errors} name="password" />
      <AButton onPress={handleSubmit(onSubmit)} />


    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

{/* <TouchableOpacity
  style={styles.button}
  onPress={() =>
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {
            name: 'Auth',
          },
        ],
      }),
    )}>
  <Text style={styles.buttonText}>Login</Text>
</TouchableOpacity> */}