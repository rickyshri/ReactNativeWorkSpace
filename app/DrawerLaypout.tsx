import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View style={{ width: "auto" }}>
      <Text style={{ color: "red", fontSize: 23 }}>Home</Text>
    </View>
  );
};


const Tabs = createBottomTabNavigator()

const MyTabs = () => {
  return ( 
    <Tabs.Navigator>
      <Tabs.Screen name="home" component={Home}/>
    </Tabs.Navigator>
  );
};

const App = () => {
  return (
    // <NavigationContainer>
      <MyTabs/>
    //  </NavigationContainer>
  );
};

export default App;
