import React from 'react';
import styled from 'styled-components/native';
import {View, Text, StatusBar, StyleSheet, Alert} from 'react-native';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

import auth from '@react-native-firebase/auth';
import colors from '../../utils/colors';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.secondary};
`;

const Header = styled.View`
  background-color: #f7ba5e;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  padding-left: 16px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export default function App({navigation}) {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  function loginWithFirebase() {
    setLoading(true);
    if (email.trim() !== '' && senha.trim() !== '') {
      auth()
        .signInWithEmailAndPassword(email, senha)
        .then(() => {
          setLoading(false);
          navigation.navigate('App');
        })
        .catch(() => {
          setLoading(false);
          Alert.alert('Erro no login');
        });
    } else {
      Alert.alert('Atenção', 'Preecha os campos corretamente');
      setLoading(false);
    }
  }

  return (
    <Container>
      <StatusBar backgroundColor={colors.orange} barStyle="dark-content" />
      <Header>
        <Text style={styles.logo}>Olá, Seja bem vindo{'\n'}ao RoadmApp</Text>
      </Header>
      <View style={styles.form}>
        <TextField
          label="Email"
          value={email}
          placeholder="exemplo@gmail.com"
          onChangeText={(text) => setEmail(text)}
        />
        <TextField
          label="Senha"
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry
        />
      </View>
      <View style={[styles.contents, {flex: 1}]}>
        <Button
          label="Login"
          background={colors.secondary}
          color={colors.primary}
          onPress={() => loginWithFirebase()}
          loading={loading}
        />
        <Button
          label="Cadastre-se"
          background={colors.primary}
          color={colors.secondary}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: colors.primary,
    fontSize: 20,
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: 50,
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: 16,
  },

  form: {
    paddingHorizontal: 16,
    marginTop: 40,
  },

  contents: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
