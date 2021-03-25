import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Screen1 from '../containers/Screen1/Screen1';
import Screen2 from '../containers/Screen2/Screen1';

const forFade = ({current}: {current: any}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="one"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: forFade,
          gestureEnabled: false,
        }}>
        <Stack.Screen name="one" component={Screen1} />
        <Stack.Screen name="two" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
