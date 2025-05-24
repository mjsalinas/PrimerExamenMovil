
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

// ⚠️ Error: SettingsScreen no importado
const Stack = createNativeStackNavigator();
//examen jesus torres



  export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Profile' component={ProfileScreen} />
       <Stack.Screen name='Settings' component={SettingsScreen} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}