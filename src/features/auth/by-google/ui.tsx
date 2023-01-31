import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Button, TextBody, variant_body } from '~/src/shared/ui';
import { GoogleLogo } from '~/src/shared/ui/logotypes';
import { Colors, Spaces } from '~/src/shared/themed';

const ByGoogle = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return (
    <Button style={style}>
      <View style={styles.googleLogo}>
        <GoogleLogo />
      </View>
      <TextBody variantSizes={variant_body.text_1} style={styles.text}>
        Log In with Google
      </TextBody>
    </Button>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.dark.text,
    fontWeight: '500',
  },
  googleLogo: {
    position: 'absolute',
    top: Spaces.space / 2,
    left: Spaces.space / 2,
  },
});
export default ByGoogle;
