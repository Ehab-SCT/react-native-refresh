import { StyleSheet, Text, TextInput,  View } from 'react-native';
import React, { FC } from 'react';
import { Control, Controller } from 'react-hook-form';

interface AInputProps {
  control: Control<any>;
  errors: Readonly<any>;
  name: string;
}

const AInput: FC<AInputProps> = ({ control, errors, name }) => {


  
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder={name}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            style={[styles.input, errors[name] && styles.errorInput]}
            placeholderTextColor="#888"
          />
        )}
      />
      {errors[name] && <Text style={styles.errorText}>{errors[name]?.message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    marginVertical: 10,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontSize: 12,
  },
});

export default AInput;
