import type { FC, ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { Spaces } from '~/src/shared/themed';
import { greyscale } from '~/src/shared/themed/colors';

type Props = ViewProps & {
  children?: ReactNode;
};
const Divider: FC<Props> = ({ children }) => {
  return (
    <View style={styles.divider}>
      <View style={styles.line} />
      {children}
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: Spaces['space-40'],
  },

  line: {
    flex: 1,
    borderColor: greyscale['100'],
    borderWidth: 0.5,
    height: 1,
    TranslateXTransform: -0.5,
  },
});

export default Divider;
