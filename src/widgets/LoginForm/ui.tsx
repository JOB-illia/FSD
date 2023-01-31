import type { FC } from 'react';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Button,
  Checkbox,
  Divider,
  Input,
  Link,
  Subtitle,
  TextBody,
  variant_body,
  variant_subtitle,
} from '~/src/shared/ui';
import Colors, { dark, white } from '~/src/shared/themed/colors';
import { Spaces, ThemeColors } from '~/src/shared/themed';
import { AuthByApple, AuthByGoogle, ByEmail } from '~/src/features/auth';

interface IAuthByLogin {}

const LoginForm: FC<IAuthByLogin> = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Subtitle variant={variant_subtitle.subheading_1} style={styles.title}>
        Log in to Carenty
      </Subtitle>
      <View style={styles.auth}>
        <View style={styles.col}>
          <AuthByGoogle />
        </View>
        <View style={styles.col}>
          <AuthByApple />
        </View>
      </View>
      <Divider>
        <TextBody variantSizes={variant_body.text_2} style={styles.or}>
          or
        </TextBody>
      </Divider>
      <View style={styles.container}>
        <View style={styles.col}>
          <Input
            keyboardType="email-address"
            textContentType="emailAddress"
            placeholderTextColor={dark['50']}
            placeholder="Email"
          />
        </View>
        <View style={[styles.col, styles.marginBottom]}>
          <Input
            keyboardType="visible-password"
            textContentType="password"
            placeholderTextColor={dark['50']}
            placeholder="Password"
          />
        </View>
        <View style={styles['save-me']}>
          <Checkbox
            value={isChecked}
            color={isChecked ? Colors.light.primary : undefined}
            label="Keep me logged in"
            onValueChange={setChecked}
          />
          <Link
            title="Forgot password ?"
            variantSizes={variant_body.text_3}
            color={ThemeColors.secondary}
          />
        </View>
        <ByEmail />
        <View style={styles.footer}>
          <TextBody variantSizes={variant_body.text_3} style={styles['space-right']}>
            Don’t have an account ?
          </TextBody>
          <Link title="Sign Up" color={ThemeColors.secondary} variantSizes={variant_body.text_2} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  wrapper: {
    width: Spaces.space * 82,
    flexBasis: Spaces.space * 82,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  auth: {
    marginTop: Spaces['space-40'],
    width: '100%',
    flexBasis: '100%',
    elevation: 5,
  },
  col: {
    marginBottom: Spaces['space-8'],
  },
  or: {
    marginHorizontal: Spaces['space-8'],
    color: dark['300'],
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
  footer: {
    marginVertical: Spaces['space-40'],
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  'space-right': {
    marginRight: Spaces['space-8'],
  },
});

export default LoginForm;
