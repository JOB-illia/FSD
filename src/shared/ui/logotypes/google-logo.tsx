import type { FC } from "react";
import { View, StyleSheet, ViewProps } from "react-native";
import { GoogleIcon } from "~/src/shared/assets/icons";
import { borderRadius, Colors, Spaces } from "~/src/shared/themed";

const GoogleLogo: FC<ViewProps> = ({ ...props }) => {
  return (
    <View style={styles.google} {...props}>
      <GoogleIcon />
    </View>
  )
}

const styles = StyleSheet.create({
  google: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: Spaces.space * 9,
    minHeight: Spaces.space * 9,
    backgroundColor: Colors.light.background,
    borderRadius: borderRadius["100"]
  }
})
export default GoogleLogo;