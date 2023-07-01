import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favorites/Favorites';
import TeacherList from '../pages/TeacherList/TeacherList';

const { Navigator, Screen } = createBottomTabNavigator();
const StudyTabs = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="TeacherList"
        component={TeacherList}
      />
      <Screen
        name="Favorites"
        component={Favorites}
      />
    </Navigator>
  );
};
export default StudyTabs;
