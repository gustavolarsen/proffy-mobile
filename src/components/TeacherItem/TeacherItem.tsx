import { Image, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import styles from './styles';

interface TeacherItemProp {
  avatar: string;
  bio: string;
  nome: string;
  materia: string;
  whatasspp: string;
  valor: number;
}

const TeacherItem = ({
  avatar,
  bio,
  nome,
  materia,
  whatasspp,
  valor,
}: TeacherItemProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{nome}</Text>
          <Text style={styles.subject}>{materia}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          {`Preço/hora   `}
          <Text style={styles.priceValue}>R$ {valor},00</Text>
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
