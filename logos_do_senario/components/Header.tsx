import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';


function Header({cor, titulo}){

    return(
    <View style={{...styles.container, backgroundColor: cor}}>
        <StatusBar style="light" />
        <Image style={styles.logo} source={require('./assets/Logo.png')} />
        <Text style={styles.texto}>{titulo}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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