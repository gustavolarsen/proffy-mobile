import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { BorderlessButton, ScrollView } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';

import styles from './styles';

const TeacherList = () => {
  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton>
            <Feather
              name="filter"
              size={20}
              color="#FFF"
            />
          </BorderlessButton>
        }
      />
      <ScrollView style={styles.teacherList}>
        <TeacherItem />
      </ScrollView>
    </View>
  );
};
export default TeacherList;
