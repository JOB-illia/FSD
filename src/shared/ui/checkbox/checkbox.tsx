import React, { FC } from 'react';
import { ColorValue, StyleSheet, View } from 'react-native';
import Checkbox, { CheckboxEvent } from 'expo-checkbox';
import { Spaces } from '~/src/shared/themed';
import { TextBody, variant_body } from '../typography';
import { dark } from '~/src/shared/themed/colors';

type Props = {
  label: string;
  value?: boolean;
  disabled?: boolean;
  color?: ColorValue;
  onChange?: (event: CheckboxEvent) => void;
  onValueChange?: (value: boolean) => void;
};

const CustomCheckbox: FC<Props> = ({ label, ...props }) => {
  return (
    <View style={styles.section}>
      <Checkbox style={styles.checkbox} {...props} />
      {label && (
        <TextBody variantSizes={variant_body.text_3} style={styles.label}>
          {label}
        </TextBody>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: Spaces['space-16'],
    height: Spaces['space-16'],
  },
  label: {
    color: dark['500'],
    marginLeft: Spaces['space-8'],
  },
});

export default CustomCheckbox;
