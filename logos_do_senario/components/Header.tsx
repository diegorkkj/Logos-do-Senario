import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

function Header(){
    return(
    <View style={styles.container}>
        <StatusBar style="light" />
        <Image style={styles.logo} source={require('./assets/Logo.png')} />
        <Text style={styles.texto}>Cadastre-se</Text>
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
});
  
  export default Header;