import type { FC } from 'react';
import { Easing, StyleSheet, View } from 'react-native';

const SpinnerMini: FC = () => {
  return <View style={styles.wrapper}></View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    zIndex: 9,
  },
  spinner: {
    width: 50,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 100,
  },
});

export default SpinnerMini;
