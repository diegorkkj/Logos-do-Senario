import React from 'react';
import { View, StyleSheet } from 'react-native';
import Status from '../components/StatusBar';
import Inputs from '../components/Input';
import Botao from '../components/Button';

const Cadastro = () => {
  const BotaoPress = () => {
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Status title="Cadastre-se" />

      <View style={styles.cadastro}>
        <Inputs placeholder="Insira seu nome" title="Nome:" />
        <Inputs placeholder="Insira seu sobrenome" title="Sobrenome:" />
        <Inputs placeholder="Insira seu email" title="E-mail:" />
        <Inputs placeholder="Insira seu telefone" title="Telefone:" />
        <Inputs placeholder="Insira sua senha" secureTextEntry={true} title="Senha:" />
        <Inputs placeholder="Confirme sua senha" secureTextEntry={true} title="Confirmar senha:" />

        <Botao label="Cadastre-se" onPress={BotaoPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastro: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    padding: 10,
  },
});

export default Cadastro;
