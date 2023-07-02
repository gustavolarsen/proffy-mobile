import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';

import styles from './styles';

const Favorites = () => {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView style={styles.teacherList}>
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};
export default Favorites;
