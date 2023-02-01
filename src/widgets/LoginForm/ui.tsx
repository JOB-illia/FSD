import type { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Subtitle, TextBody, variant_body, variant_subtitle } from '~/src/shared/ui';
import { dark } from '~/src/shared/themed/colors';
import { Spaces } from '~/src/shared/themed';
import { AuthByApple, AuthByGoogle, ByEmail } from '~/src/features/auth';

interface IAuthByLogin {}

const LoginForm: FC<IAuthByLogin> = () => {
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
      <ByEmail />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default LoginForm;
