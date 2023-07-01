import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';
const GiveClasses = () => {
  const { goBack } = useNavigation();

  function hendleGoBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa plataforma
          web.
        </Text>
      </ImageBackground>

      <TouchableOpacity
        onPress={hendleGoBack}
        style={styles.okButton}
      >
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </TouchableOpacity>
    </View>
  );
};
export default GiveClasses;
