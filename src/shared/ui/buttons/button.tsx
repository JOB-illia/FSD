import type { FC, PropsWithChildren, ReactNode } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { borderRadius, Colors, Spaces } from '~/src/shared/themed';
import { TThemeColors, ThemeColors } from '~/src/shared/themed/types';
import { SpinnerMini } from '../loaders';

type Props = TouchableOpacityProps & {
  children: ReactNode;
  variants?: ThemeColors;
};

const Button: FC<PropsWithChildren<Props>> = ({
  children,
  variants = ThemeColors.primary,
  ...props
}) => {
  const classes = styles({ color: variants });
  const isOutline = variants === ThemeColors.outline;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      style={[classes.button, ...(isOutline ? [classes.outline] : [])]} // ...(isOutline ? [classes.outline] : [])
    >
      <SpinnerMini />
      {children}
    </TouchableOpacity>
  );
};
const styles = ({ color }: { color: TThemeColors }) =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      position: 'relative',
      borderRadius: borderRadius['100'],
      backgroundColor: Colors.light[color],
      height: Spaces['space-40'],
      width: '100%',
    },
    outline: {
      borderColor: Colors.light.border,
      borderWidth: 1,
      color: Colors.light.text,
      border: '1px solid red',
    },
  });

export default Button;
