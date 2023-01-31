import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';
import { Spaces } from '~/src/shared/themed';
import { Logo } from '~/src/shared/assets/icons';
const AppBar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="slide"
        hidden={false}
      />
      <View style={styles.container}>
        <Logo />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    minHeight: Spaces.space * 15,
    paddingLeft: Spaces['space-16'],
    paddingRight: Spaces['space-16'],
  },
});

export default AppBar;
