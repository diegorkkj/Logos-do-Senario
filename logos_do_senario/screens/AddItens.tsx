import React from "react";
import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import PatriBar from "../components/PatrimonioBar";
import {AntDesign } from '@expo/vector-icons';
import Footbar from "../components/Footer";
import InputinventoryInput from "../components/Inputitens";
const AddIten = () => {
    return(
        <View style={styles.container}>
            <PatriBar color="red">
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color="#ffff" />
                </TouchableOpacity>
                    <Text style={styles.text}>Cadastro de itens</Text>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="#ffff" />
                </TouchableOpacity>
            </PatriBar>
            <View style={styles.inputContainer}>
            <InputinventoryInput label="N° Inventario"/>
            <InputinventoryInput label="Descrição"/>
            <InputinventoryInput label="Local"/>
            <InputinventoryInput label="Responsável"/>
            <InputinventoryInput label="Data de registro"/>
            </View>
            <Footbar color="white" ColorIcon="#595959" margem={1} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        color: "#ffff",
        fontSize: 16,

    },
    inputContainer: {
        flex: 1,
        marginTop: 50,
    },
});
export default AddIten;