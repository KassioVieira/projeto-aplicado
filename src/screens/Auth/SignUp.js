import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import Container from '../../components/container';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import colors from '../../utils/colors';

export default function SignUp({navigation}) {
  const [email, setEmail] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [user, setUser] = React.useState();

  const [initializing, setInitializing] = React.useState(true);

  function onAuthStateChanged(user) {
    user && setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function registerUser() {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((success) => {
        setTimeout(() => {
          saveUser();
        }, 1000);
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Atenção', 'Email já está cadastrado');
          setLoading(false);
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Atenção', 'Email inválido');
          setLoading(false);
        }

        if (error.code === 'auth/weak-password') {
          Alert.alert('Atenção', 'Escolha uma senha mais forte');
        }
        console.error(error);
      });
  }

  function saveUser() {
    if (user) {
      firestore()
        .collection('users')
        .doc(user._user.uid)
        .set({
          nome: nome,
          email: email,
        })
        .then(() => {
          setLoading(false);
          Alert.alert('Atenção', 'Cadastro realizado com sucesso');
          auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        });
    }
  }

  if (initializing) return null;

  return (
    <Container>
      <StatusBar backgroundColor={colors.secondary} barStyle="dark-content" />
      <Text style={styles.logo}>Cadastro</Text>
      <View style={styles.contents}>
        <TextField
          label="Nome"
          value={nome}
          placeholder="Digite seu nome completo"
          onChangeText={(text) => setNome(text)}
        />
        <TextField
          label="Email"
          value={email}
          placeholder="Digite seu e-mail"
          onChangeText={(text) => setEmail(text)}
        />
        <TextField
          label="Senha"
          value={senha}
          placeholder="Digite sua senha"
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />
        <Button
          label="Enviar"
          background={colors.primary}
          color={colors.secondary}
          loading={loading}
          onPress={() => registerUser()}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: colors.primary,
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Montserrat-Bold',
  },

  contents: {
    flex: 1,
    marginTop: 50,
  },
});
