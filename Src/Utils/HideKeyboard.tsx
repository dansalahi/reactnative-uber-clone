import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

interface HideKeyboardProps {
  children: React.ReactNode;
}

const HideKeyboard: React.FC<HideKeyboardProps> = ({children}) => {
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default HideKeyboard;
