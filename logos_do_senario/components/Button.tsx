import { View, Text, TouchableOpacity, StyleSheet, } from 'react-native';

function Button(){
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textButton: {
        width: 217,
        height: 24,
        fontFamily: 'Inter',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'left',
    },
    button: {
        width: 320,
        height: 37,
        top: 407,
        left: 20,
        padding: 10,
        borderRadius: 5,
        gap: 10,
        backgroundColor: '#101010',
    },
});

    export default Button;