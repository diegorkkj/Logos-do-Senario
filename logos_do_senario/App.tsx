import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function App(){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.logo} source={require('./assets/Logo.png')} />
      <Text style={styles.texto} >Bem-vindo(a)</Text>
      <View style={styles.content}>
      <Text style={styles.email}>Email:</Text>
      <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Digite seu email:"
            />
            <Text style={styles.senha}>Senha:</Text>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setSenha(text)}
                value={senha}
                placeholder="Sua senha:"
            />
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Acessar</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.cadastro}>Não possui conta? Cadastre-se</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF0000",
    alignItems: "center",
  },
  logo: {
    marginTop: 90,
  },
  texto: {
    marginTop: 15,
    color : "#FFFFFF",
    fontSize: 20,
    fontWeight: '400',
  },
  content: {
    marginTop: 25,
    width: 415,
    height: 641,
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  email: {
    paddingTop: 5,
    color: "#242323",
    fontFamily: 'Roboto',
    fontSize: 16,
  },
  cadastro: {
    fontFamily: 'Roboto',
    fontSize: 15,
    marginTop: 25,
    color: "#4305C7" 
  },  
  senha: {
    paddingTop: 25,
    color: "#242323",
    fontFamily: 'Roboto',
    fontSize: 16,
    paddingBottom: 10,
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
  },
  input: {
    height: 40,
    marginBottom: 10,
    fontFamily: 'Roboto',
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  button: {
    backgroundColor: '#000',
    width: 380,
    height: 47,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
});

