import type { FC } from 'react';
import { Spaces, ThemeColors } from '~/src/shared/themed';
import { Button, Checkbox, Input, Link, TextBody, variant_body } from '~/src/shared/ui';
import Colors, { dark, white } from '~/src/shared/themed/colors';
import { StyleSheet, View } from 'react-native';
import { handleChangeDataValue, handleChangeSaveToken, viewerLogin } from '~/src/entities/viewer';
import { useAppDispatch, useAppSelector } from '~/src/shared/libs';

const ByEmail: FC = () => {
  const dispatch = useAppDispatch();
  const { saveToken } = useAppSelector((state) => state.viewer);

  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Input
          keyboardType="email-address"
          textContentType="emailAddress"
          placeholderTextColor={dark['50']}
          placeholder="Email"
          onChangeText={(text) => dispatch(handleChangeDataValue({ type: 'email', value: text }))}
        />
      </View>
      <View style={[styles.col, styles.marginBottom]}>
        <Input
          keyboardType="visible-password"
          textContentType="password"
          placeholderTextColor={dark['50']}
          placeholder="Password"
          onChangeText={(text) =>
            dispatch(handleChangeDataValue({ type: 'password', value: text }))
          }
        />
      </View>
      <View style={styles['save-me']}>
        <Checkbox
          value={saveToken}
          color={saveToken ? Colors.light.primary : undefined}
          label="Keep me logged in"
          onValueChange={() => dispatch(handleChangeSaveToken())}
        />
        <Link
          title="Forgot password ?"
          variantSizes={variant_body.text_3}
          color={ThemeColors.secondary}
        />
      </View>
      <Button variants={ThemeColors.secondary} onPress={() => dispatch(viewerLogin())}>
        <TextBody variantSizes={variant_body.text_1} color={white}>
          Continue with Email
        </TextBody>
      </Button>
      <View style={styles.footer}>
        <TextBody variantSizes={variant_body.text_3} style={styles['space-right']}>
          Don’t have an account ?
        </TextBody>
        <Link title="Sign Up" color={ThemeColors.secondary} variantSizes={variant_body.text_2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  col: {
    marginBottom: Spaces['space-8'],
  },
  marginBottom: {
    marginBottom: Spaces['space-8'],
  },
  'save-me': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Spaces['space-20'],
    marginVertical: Spaces['space-8'],
    marginBottom: Spaces['space-20'],
  },
  'space-right': {
    marginRight: Spaces['space-8'],
  },
  footer: {
    marginVertical: Spaces['space-40'],
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ByEmail;
