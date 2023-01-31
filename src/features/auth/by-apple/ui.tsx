import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Button, TextBody, variant_body } from '~/src/shared/ui';
import { Colors, Spaces, ThemeColors } from '~/src/shared/themed';
import { AppleIcon } from '~/src/shared/assets/icons';

const ByApple = ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return (
    <Button variants={ThemeColors.outline} style={style}>
      <View style={styles.appleIcon}>
        <AppleIcon />
      </View>
      <TextBody variantSizes={variant_body.text_1} style={styles.text}>
        Log In with Apple
      </TextBody>
    </Button>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.light.text,
    fontWeight: '500',
  },
  appleIcon: {
    width: Spaces['space-12'],
    marginRight: Spaces['space-8'],

    svg: {
      width: '100%',
      height: '100%',
    },
  },
});
export default ByApple;
