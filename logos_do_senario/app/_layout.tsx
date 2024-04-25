import { Stack } from "expo-router";
import { useColor } from "../temas/temas";
import React from "react";
import { Ionicons } from "@expo/vector-icons";


export default function layout() {
  const cores = useColor();
  return (
    <Stack>

    {/* Esta e a Tela index */}
      <Stack.Screen name="index" options={{
        headerShown: false, 
        statusBarColor: "black" }} />
      
    {/* Esta e a Tela de Recuperação de Senha */}
      <Stack.Screen name="TelasIniciais/RecupSenha" options={{
        headerTitle: "" ,
        statusBarColor: "#011E83",
        headerTintColor: "#fff", 
        headerTransparent: true }} />
    {/* Esta e a Tela de Cadastro */}
      <Stack.Screen name="TelasIniciais/Cadastro" options={{
        headerTitle: "" , 
        statusBarColor: "red",
        headerTintColor: "#fff",
        headerTransparent: true }} />
    {/* Esta e a Tela de Login */}
    <Stack.Screen name="TelasIniciais/Login" options={{
        headerTitle: "" , 
        statusBarColor: "red",
        headerTintColor: "#fff",
        headerTransparent: true }} />
    {/* Esta e a Tela de TabNav */}
      <Stack.Screen name="TabNav" options={{
        headerShown: false, 
      }} />


    </Stack>



  )
}