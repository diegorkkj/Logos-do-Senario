import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { View, StyleSheet, Text, Alert } from 'react-native';
import Status from '../components/StatusBar';
import Inputs from '../components/Input';

import Botao from '../components/Button';

const Cadastro = () => {
  const BotaoPress = () => {
    Alert.alert('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Status/>
      <Text style={styles.texto}>Cadastre-se</Text>

      <Status title="Cadastre-se" />

      <View style={styles.cadastro}>

        <Inputs placeholder="insira seu nome: " secureTextEntry={false} title="Nome:"/>

        <Inputs placeholder="insira seu sobrenome: " secureTextEntry={false} title="Sobrenome:" />

        <View style={styles.cadastro}>
          <Text style={styles.textoinp}>Nome:</Text> 
          <Inputs />
        <Inputs placeholder="insira seu email:" secureTextEntry={false} title="E-mail:"/>

          <Text style={styles.textoinp}>Sobrenome:</Text> 
          <Inputs/> 
        <Inputs placeholder="insira seu telefone:" secureTextEntry={false} title="Telefone"/>

          <Text style={styles.textoinp}>E-mail:</Text> 
          <Inputs/> 
        <Inputs placeholder="insira sua senha:" secureTextEntry={true} title="Senha:"/>

          <Text style={styles.textoinp}>Telefone:</Text> 
          <Inputs/> 
        <Inputs placeholder="insira sua senha novamente:" secureTextEntry={true} title="Confirmar senha:"/>

          <Text style={styles.textoinp}>Senha:</Text> 
          <Inputs/>
        <Botao label="Cadastre-se" onPress={BotaoPress} />

          <Text style={styles.textoinp}>Confirmar Senha:</Text> 
          <Inputs/> 
        </View> 
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'center',
  },
  texto: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 18,

  },
  cadastro: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 5,

  },
  textoinp: {
    margin: 10,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    padding: 10,
  },
});

export default Cadastro;