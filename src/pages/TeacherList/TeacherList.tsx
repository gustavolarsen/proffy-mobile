import { Feather } from '@expo/vector-icons';
import { Text, TextInput, View } from 'react-native';
import {
  BorderlessButton,
  RectButton,
  ScrollView,
} from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader/PageHeader';
import TeacherItem from '../../components/TeacherItem/TeacherItem';

import styles from './styles';

const FilterForm = () => {
  return (
    <View style={styles.searchForm}>
      <Text style={styles.label}>Matéria</Text>
      <TextInput
        style={styles.input}
        // value={subject}
        // onChangeText={text => setSubject(text)}
        placeholder="Qual a matéria?"
        placeholderTextColor="#c1bccc"
      />

      <View style={styles.inputGroup}>
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Dia da semana</Text>
          <TextInput
            style={styles.input}
            // value={week_day}
            // onChangeText={text => setWeekDay(text)}
            placeholder="Qual o dia?"
            placeholderTextColor="#c1bccc"
          />
        </View>

        <View style={styles.inputBlock}>
          <Text style={styles.label}>Horário</Text>
          <TextInput
            style={styles.input}
            // value={time}
            // onChangeText={text => setTime(text)}
            placeholder="Qual horário?"
            placeholderTextColor="#c1bccc"
          />
        </View>
      </View>

      <RectButton
        onPress={handleFiltersSubmit}
        style={styles.submitButton}
      >
        <Text style={styles.submitButtonText}>Filtrar</Text>
      </RectButton>
    </View>
  );
};

const handleFiltersSubmit = () => {};
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
      >
        <FilterForm />
      </PageHeader>
      <ScrollView style={styles.teacherList}>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
};
export default TeacherList;
