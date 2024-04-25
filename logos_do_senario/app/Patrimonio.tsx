import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity, Text} from "react-native";
import { Feather, Octicons, AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import PatriBar from "../components/PatrimonioBar";
import Itens from "../components/Itens";
import Footbar from "../components/Footer";

const Patrimonio = () => {

    return(
        <View style={styles.container}>
            <PatriBar color="white">
                <TouchableOpacity>
                    <Octicons name="three-bars" size={24} color="black" />
                </TouchableOpacity>
                    <Text style={styles.text}>Lista</Text>
                <TouchableOpacity>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </PatriBar>
            <ScrollView>
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
                <Itens id={956389} item={'CADEIRA SENAI'} />
            </ScrollView>
            <View style={styles.addButtonContainer}>
                <Link href="/Additens" asChild>
                    <AntDesign name="pluscircle" size={50} color="red"  />
                </Link>
            </View>

            <Footbar color="red" ColorIcon="white" margem={0} />


        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    addButtonContainer: {
        position: "absolute",
        bottom: 20,
        right: 0,
        margin: 20,
        marginBottom: 50,
        height: 60,
    },
    text: {
        color: "#000",
        fontSize: 16,
    }, 
});

export default Patrimonio;
