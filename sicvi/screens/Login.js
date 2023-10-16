import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
//import axios from "axios";

const Login = ({ navigation }) => {
  const initalState = {
    email: "",
    password: "",
    passwordView: true,
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const RecuperarPassword = () => {
    navigation.navigate("Recuperar");
  };

  const crearCuenta = () => {
    navigation.navigate("CreateUser");
  };

  const ingresar = async () => {
    navigation.navigate("Navigation");
    // if (state.email !== "" && state.password !== "") {
    //   const user = await axios.get(
    //     "http://localhost:2000/api/users/" + state.email
    //   );
    //   console.log(user);
    //   if (user.data !== null) {
    //     console.log(state.password);
    //     if (user.data.password === state.password) {
    //       props.navigation.navigate("ProfileScreen", {
    //         email: state.email,
    //       });
    //       console.log(state.email);
    //     } else {
    //       console.log("contraseña incorrecta");
    //     }
    //   } else {
    //     console.log("el usuario no existe");
    //   }
    // }
  };

  return (
    <ScrollView style={styles.padre}>
      <View style={styles.container}>
        <Text style={styles.titulo}>SICVI</Text>
        <MaterialCommunityIcons
          name="account-outline"
          color="#cccccc"
          size={112}
        />
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
          keyboardType={"email-address"}
        />
        <View style={styles.containerPassword}>
          <TouchableOpacity
            style={styles.botonForgot}
            onPress={() => RecuperarPassword()}
          >
            <Text style={styles.botonForgotText}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="********"
            onChangeText={(value) => handleChangeText(value, "password")}
            value={state.name}
            secureTextEntry={state.passwordView}
          />
        </View>
        <TouchableOpacity
          style={styles.botonCrear}
          onPress={() => crearCuenta()}
        >
          <Text style={styles.botonCrearText}>Crear Cuenta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonLogin} onPress={() => ingresar()}>
          <Text style={styles.botonLoginText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  padre: {
    flex: 1,
  },
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
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 15,
    fontSize: 16,
  },
  containerPassword: {
    padding: 0,
  },

  botonForgot: {
    marginTop: 10,
    marginRight: 25,
    textAlign: "center",
    alignItems: "flex-end",
  },
  botonForgotText: {
    color: "#e50000",
    fontSize: 14,
  },
  botonCrear: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  botonCrearText: {
    color: "#59028e",
    fontSize: 20,
  },
  botonLogin: {
    width: 280,
    height: 50,
    marginVertical: 10,
    backgroundColor: "#59028e",
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  botonLoginText: {
    color: "#ffffff",
    fontSize: 20,
  },
});

export default Login;
