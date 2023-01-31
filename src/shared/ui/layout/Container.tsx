import type { FC, ReactNode } from 'react';
import { ScrollView, StyleSheet, View, ViewProps } from 'react-native';

interface IContainer extends ViewProps {
  children: ReactNode;
  marginVertical?: number;
}

const Container: FC<IContainer> = ({ children, marginVertical, ...props }) => {
  const style = container({ marginVertical: marginVertical ?? 0 });

  return (
    <ScrollView>
      <View style={style.container} {...props}>
        {children}
      </View>
    </ScrollView>
  );
};

const container = ({ marginVertical }: { marginVertical: number }) =>
  StyleSheet.create({
    container: {
      marginVertical: marginVertical,
      flexDirection: 'row',
    },
  });

export default Container;
