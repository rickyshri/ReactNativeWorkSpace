import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useLinkBuilder, useTheme } from "@react-navigation/native";
import { PlatformPressable } from '@react-navigation/elements';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <StatusBar style="auto" />
    </View>
  );
}
function ProffScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// const Tabs = createBottomTabNavigator();



const Drawer = createDrawerNavigator();

const MyTab = () => {
  return (
    // <Tabs.Navigator
    //   screenOptions={{
    //     animation: "shift",
    //     tabBarPosition: "bottom",
    //     title:"one",
    //     tabBarLabel:"rrrr"
    //   ,
    //   tabBarLabelPosition:"beside-icon",
    //   // tabBarLabelStyle:
      
    //   }}
    //   // backBehavior=""
    //   // initialRouteName="Blog"
    //   // detachInactiveScreens={true}
        
    // >
    //   <Tabs.Screen name="home" component={HomeScreen}  />
    //   <Tabs.Screen name="Blog" component={HomeScreen}  />
    //   <Tabs.Screen name="About" component={HomeScreen}  />
    //   <Tabs.Screen name="profile" component={ProffScreen} />
    // </Tabs.Navigator>



 <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTab />
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
