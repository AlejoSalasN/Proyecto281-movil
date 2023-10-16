import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
//import axios from "axios";

const CreateUser = ({ navigation }) => {
  const initalState = {
    nombre: "",
    paterno: "",
    materno: "",
    telefono: "",
    direccion: "",
    sexo: "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveUser = async () => {
    navigation.navigate("Navigation");
    // if (
    //   state.name !== "" &&
    //   state.email !== "" &&
    //   state.institution !== "" &&
    //   state.password !== ""
    // ) {
    //   console.log(state.name, state.password);
    //   await axios
    //     .post("http://localhost:2000/api/users/", {
    //       name: state.name,
    //       email: state.email,
    //       institution: state.institution,
    //       password: state.password,
    //     })
    //     .catch((err) => console.log(err));
    // }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>SICVI</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(value) => handleChangeText(value, "nombre")}
          value={state.name}
        />
        <TextInput
          style={styles.input}
          placeholder="Paterno (opcional)"
          onChangeText={(value) => handleChangeText(value, "paterno")}
          value={state.paterno}
        />
        <TextInput
          style={styles.input}
          placeholder="Materno (opcional)"
          onChangeText={(value) => handleChangeText(value, "materno")}
          value={state.materno}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de Teléfono"
          onChangeText={(value) => handleChangeText(value, "telefono")}
          value={state.telefono}
        />
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          onChangeText={(value) => handleChangeText(value, "direccion")}
          value={state.direccion}
        />
        <View style={styles.input}>
          <Picker
            selectedValue={state.sexo}
            onValueChange={(itemValue, itemIndex) =>
              handleChangeText(itemValue, "sexo")
            }
          >
            <Picker.Item label="Femenino" value="Femenino" />
            <Picker.Item label="Masculino" value="Masculino" />
            <Picker.Item label="No" value="No" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.botonLogin} onPress={() => saveUser()}>
          <Text style={styles.botonLoginText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    color: "#59028e",
    fontSize: 64,
    marginBottom: 5,
  },
  input: {
    height: 50,
    width: 280,
    backgroundColor: "white",
    paddingHorizontal: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    fontSize: 16,
  },
  botonLogin: {
    padding: 10,
    height: 50,
    margin: 10,
    backgroundColor: "#59028e",
    paddingHorizontal: 7,
    alignItems: "flex-end",
    textAlign: "center",
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  botonLoginText: {
    color: "#ffffff",
    fontSize: 20,
  },
  texto: {
    color: "blue",
  },
});

export default CreateUser;
