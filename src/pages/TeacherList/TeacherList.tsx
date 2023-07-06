import { Feather } from '@expo/vector-icons';
import { Text, TextInput, View } from 'react-native';
import {
  BorderlessButton,
  RectButton,
  ScrollView,
} from 'react-native-gesture-handler';

import { teachersArr } from '../../api/teachers';

import PageHeader from '../../components/PageHeader/PageHeader';

import { useState } from 'react';
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

const handleFiltersSubmit = () => {
  alert('aqui');
};

const TeacherList = () => {
  const [teachers, setTeachers] = useState(teachersArr);
  const [filterVisible, setFilterVisible] = useState(false);

  const toggleFilterVisible = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={toggleFilterVisible}>
            <Feather
              name="filter"
              size={20}
              color="#FFF"
            />
          </BorderlessButton>
        }
      >
        {filterVisible && <FilterForm />}
      </PageHeader>

      <ScrollView style={styles.teacherList}>
        {teachers.map(teacher => {
          return (
            <TeacherItem
              key={teacher.id}
              nome={teacher.nome}
              avatar={teacher.avatar}
              bio={teacher.bio}
              materia={teacher.materia}
              valor={teacher.valor}
              whatasspp={teacher.whastapp}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
export default TeacherList;
