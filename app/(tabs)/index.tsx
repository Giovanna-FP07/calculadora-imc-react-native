import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState("");

  function calcularIMC() {

    const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "Abaixo do peso";
    } else if (imc < 25) {
      classificacao = "Peso normal";
    } else if (imc < 30) {
      classificacao = "Sobrepeso";
    } else {
      classificacao = "Obesidade";
    }

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Calculadora IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu peso"
        keyboardType="numeric"
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua altura"
        keyboardType="numeric"
        onChangeText={setAltura}
      />

      <TouchableOpacity style={styles.botao} onPress={calcularIMC}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.resultado}>{resultado}</Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  titulo: {
    fontSize: 24,
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5
  },

  botao: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },

  textoBotao: {
    color: "white",
    fontSize: 18
  },

  resultado: {
    marginTop: 20,
    fontSize: 18
  }

});