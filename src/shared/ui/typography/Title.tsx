import { StyleSheet, Text, TextProps } from "react-native";
import { TypographyVariables } from "../../themed";

export enum variant_heading {
  heading_1 = 'heading-1',
  heading_2 = 'heading-2',
  heading_3 = 'heading-3',
  heading_4 = 'heading-4',
  heading_5 = 'heading-5',
  heading_6 = 'heading-6',
}

interface IText extends TextProps {
  variant: variant_heading;
}
const Title = ({ variant, ...props }: IText) => {
  const styles = heading(TypographyVariables[variant]);

  return (
    <Text
      {...props}
      style={[props.style, styles.headingStyle]}
    />
  );
};

const heading = ({ size, height }: { size: number; height: number }) =>
  StyleSheet.create({
    headingStyle: {
      fontSize: size,
      lineHeight: height,
    },
  });

export default Title;