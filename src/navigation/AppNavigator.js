import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import MainTabs from './MainTabNavigator';
import { Load, Login } from '../screens'
import { navigationRef } from './NavigationApp';

const Stack = createStackNavigator();

export const mainTab = () => {
  return navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: 'MainTabs' }],
    })
  );
};

function AppNavigator() {
  const routeNameRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
      }
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Navigator
          screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forFade,
        }}>
          <Stack.Screen name="Load" component={Load} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="MainTabs" component={MainTabs} />
        </Stack.Navigator>

      </NavigationContainer>
  )
}
export default AppNavigator;
