import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';
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
    </View>
  );
};
export default TeacherList;
