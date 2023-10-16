import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navigation from "./screens/Navigation";
import Login from "./screens/Login";
import CreateUser from "./screens/CreateUser";
import RecuperarPassword from "./screens/RecuperarPassword";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={{ marginTop: 30 }}></View>
      <Stack.Navigator
        screenOptions={{
          headerBackVisible: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateUser"
          component={CreateUser}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Recuperar"
          component={RecuperarPassword}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{
            headerShown: false,
            // title: "Iniciar",
            // headerTitleAlign: "center",
            // headerStyle: {
            //   backgroundColor: "#fff",
            // },
            // headerTintColor: "#000",
            // headerTitleStyle: {
            //   fontWeight: "bold",
            // },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
