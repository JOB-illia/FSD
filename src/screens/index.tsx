import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppBar } from '~/src/widgets';

import SignInScreen from './sign-in-screen';
import { linking } from './config';

const Navigation = () => {
  return (
    <NavigationContainer linking={linking}>
      <AuthNavigation />
    </NavigationContainer>
  );
};

export default Navigation;

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: AppBar }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};
