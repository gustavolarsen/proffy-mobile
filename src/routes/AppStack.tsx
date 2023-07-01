import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../pages/Landing/Landing';

const { Navigator, Screen } = createNativeStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="Landing"
          component={Landing}
        />
      </Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
