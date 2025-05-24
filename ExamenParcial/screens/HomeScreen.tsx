import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  //const [showWelcome, setshowWelcome] = useState(false);

  const showWelcome = true;

  return (
    <View style={{ padding: 20 ,flex:1,alignItems:"center",alignContent:"space-between"}}>

      {showWelcome && <Text  style={{
    fontSize: 30,
    fontWeight: 'bold'}}>Bienvenido a la App</Text>}


<View style={{marginTop:20}}>
      <Button
        title="Ir a Perfil"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
      </View>
 <View style={{marginTop:20}}>
        <Button
          title="Ir a Settings"
          onPress={() => {
            navigation.navigate("Settings");
          }}
        />
       </View>
    </View>
  );
}

