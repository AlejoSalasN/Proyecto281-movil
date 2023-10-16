import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";
import { StyleSheet } from "react-native";

import Login from "./Login";
import CreateUser from "./CreateUser";
import Eventos from "./Eventos";
import Encuesta from "./Encuesta";
import Inicio from "./Inicio";
import Leyes from "./Leyes";
import Informacion from "./Informacion";

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarActivateBackgroundColor="#fff"
      activateColor="#000"
      inactiveColor="#95a5a6"
      barStyle={styles.navigationBar}
    >
      <Tab.Screen
        name="Inicio"
        component={Inicio}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" color="#000" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Informacion"
        component={Informacion}
        options={{
          tabBarLabel: "Información",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="information" color="#000" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Leyes"
        component={Leyes}
        options={{
          tabBarLabel: "Leyes",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="gavel" color="#000" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Encuesta"
        component={Encuesta}
        options={{
          tabBarLabel: "Encuesta",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="poll" color="#000" size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Eventos"
        component={Eventos}
        options={{
          tabBarLabel: "Eventos",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="calendar" color="#000" size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: "#fff",
    paddingBottom: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#666",
  },
});

export default Navigation;
