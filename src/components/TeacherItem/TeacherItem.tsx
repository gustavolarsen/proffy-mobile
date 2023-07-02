import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

const TeacherItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://github.com/gustavolarsen.png' }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Gustavo Larsen</Text>
          <Text style={styles.subject}>Programação Web</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Curabitur congue erat nisl, finibus hendrerit ipsum elementum in. Cras
        tincidunt semper sem vitae faucibus. Pellentesque rutrum accumsan tincidunt.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          {`Preço/hora   `}
          <Text style={styles.priceValue}>R$ 100,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};
export default TeacherItem;
