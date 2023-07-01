import { Image, Text, TouchableOpacity, View } from 'react-native';
import giveClassesImage from '../../assets/images/icons/give-classes.png';
import heartImage from '../../assets/images/icons/heart.png';
import studyImage from '../../assets/images/icons/study.png';
import landingImage from '../../assets/images/landing.png';
import styles from './styles';

const Landing = () => {
  return (
    <View style={styles.container}>
      <Image
        source={landingImage}
        style={styles.banner}
      />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyImage} />
          <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesImage} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.totalConnections}>
        {`Total de 258 conexões já realizadas `} <Image source={heartImage} />
      </Text>
    </View>
  );
};
export default Landing;
