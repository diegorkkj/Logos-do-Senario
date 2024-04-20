import { View, StyleSheet, Alert, Text } from 'react-native';
import Status from '../components/StatusBar';
import Inputs from '../components/Input';
import Botao from '../components/Button';

const RecupSenha = () => {
    const BotaoPress = () => {
        Alert.alert('E-mail enviado com sucesso! Aguarde para a recuparação da senha!');
    };

    return (
        <View style={styles.container}>

            <Status title="Recuperação de senha" />

            <View style={styles.cadastro}>

                <Text style={styles.texto}>Insira seu e-mail para recuperar a senha!</Text>

                <Inputs placeholder="insira seu email:" secureTextEntry={false} title="E-mail:"/>

                <Botao label="Cadastre-se" onPress={BotaoPress} />

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cadastro: {
        backgroundColor: 'white',
        flex: 1,
        width: '100%',
        padding: 10,
        alignItems: 'center',
    },
    texto: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        width: '70%',
        margin: 20,
    },

});

export default RecupSenha;