import React from 'react';
import {Button} from 'react-native';

export type AppButtonProps = {
  title: string;
  variant:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  children: React.ReactElement | string;
  extendClass?: string;
  isLoading?: boolean;
  onPress?: () => void;
} & React.ComponentProps<typeof Button>;

const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  ...otherProps
}) => {
  return (
    <Button
      title={title}
      onPress={onPress}
      {...otherProps}
    />
  );
};

export default AppButton;
