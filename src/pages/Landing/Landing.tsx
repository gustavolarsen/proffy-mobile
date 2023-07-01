import { Image, View } from 'react-native';
import landingImage from '../../assets/images/landing.png';
import styles from './styles';

const Landing = () => {
  return (
    <View style={styles.container}>
      <Image
        source={landingImage}
        style={styles.banner}
      />
    </View>
  );
};
export default Landing;
