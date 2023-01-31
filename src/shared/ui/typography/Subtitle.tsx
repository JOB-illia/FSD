import { StyleSheet, Text, TextProps } from "react-native";
import { TypographyVariables } from "../../themed";

export enum variant_subtitle {
  subheading_1 = 'subheading-1',
  subheading_2 = 'subheading-2',
  subheading_3 = 'subheading-3',
}

interface ISubheading extends TextProps {
  variant: variant_subtitle;
}
const Subtitle = ({ variant, ...props }: ISubheading) => {
  const styles = subtitle(TypographyVariables[variant]);

  return (
    <Text
      {...props}
      style={[props.style, styles.titleStyle]}
    />
  );
};

const subtitle = ({ size, height }: { size: number; height: number }) =>
  StyleSheet.create({
    titleStyle: {
      fontSize: size,
      lineHeight: height,
    },
  });

export default Subtitle;