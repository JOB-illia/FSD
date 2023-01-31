import type { FC } from 'react';
import { useState } from 'react';
import { TextInput, StyleSheet, TextInputProps, View, TouchableOpacity } from 'react-native';
import { borderRadius, Spaces } from '~/src/shared/themed';
import { ShowPasswordIcon } from '~/src/shared/assets/icons';
import { dark } from '~/src/shared/themed/colors';

type Props = TextInputProps & {};
const Input: FC<Props> = ({ ...props }) => {
  const isPassword = props.keyboardType === 'visible-password';
  const [password, setPassword] = useState(isPassword);

  const handleChangeVisibilityPassword = () => {
    setPassword((prevState) => !prevState);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        {...props}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={password}
      />
      {isPassword && (
        <TouchableOpacity style={styles.button} onPress={handleChangeVisibilityPassword}>
          <ShowPasswordIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  input: {
    textAlign: 'left',
    height: Spaces['space-40'],
    borderWidth: 1,
    borderColor: dark['50'],
    borderRadius: borderRadius['12'],
    width: '100%',
    paddingHorizontal: Spaces.space * 3,
    paddingRight: Spaces['space-64'],
    placeholderTextColor: 'red',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: Spaces['space-48'],
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});
export default Input;
