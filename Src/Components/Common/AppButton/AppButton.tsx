import React from 'react';
import {Button} from 'react-native';

const AppButton: React.FC = () => {
  return (
    <Button
      title={'title'}
      onPress={() => {
        console.log('clicked');
      }}
    />
  );
};

export default AppButton;
