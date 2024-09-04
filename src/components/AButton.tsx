import { Pressable, Text, StyleSheet } from 'react-native';
import React, { FC } from 'react';

interface AButtonProps {
  onPress: () => void;
  title?: string; // Optional title prop to allow customization of button text
}

const AButton: FC<AButtonProps> = ({ onPress, title = "Submit" }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3ea47d', // Blue color
    paddingVertical: 12,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default AButton;
