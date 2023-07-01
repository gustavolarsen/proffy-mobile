import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GiveClasses from '../pages/GiveClasses/GiveClasses';
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
        <Screen
          name="GiveClasses"
          component={GiveClasses}
        />
      </Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
