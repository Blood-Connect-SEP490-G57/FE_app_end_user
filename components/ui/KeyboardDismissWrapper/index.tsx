import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

interface KeyboardDismissWrapperProps {
  children: React.ReactNode;
}

export function KeyboardDismissWrapper({ children }: KeyboardDismissWrapperProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
}