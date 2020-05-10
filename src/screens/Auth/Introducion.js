import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import Container from '../../components/container';
import Button from '../../components/Button';
import colors from '../../utils/colors';

export default function App({navigation}) {
  return (
    <Container>
      <StatusBar backgroundColor={colors.secondary} barStyle="dark-content" />
      <View style={(styles.contents, [{flex: 1}])}>
        <Text style={styles.logo}>
          Olá, Buscando aprender{'\n'}uma nova tecnologia{'\n'}hoje?
        </Text>
        <Image
          resizeMode="contain"
          source={require('../../assets/img/app.png')}
          style={{width: '100%', height: '100%'}}
        />
      </View>
      <View style={[styles.contents, {flex: 1}]}>
        <Button
          label="Sign up with Google"
          background={colors.secondary}
          color={colors.primary}
          onPress={() => navigation.navigate('App')}
        />
        <Button
          label="Sign Up"
          background={colors.primary}
          color={colors.secondary}
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
  },

  contents: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
