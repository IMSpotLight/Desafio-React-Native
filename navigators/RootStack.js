import React from "react";
import Home from './../screens/home';
import About from "../screens/about";
import Registo from "../screens/registo";
import Cama from "../screens/cama";
import Medicação from "../screens/medicação";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

const DrawerNavigator = createDrawerNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator.Navigator initialRouteName="MRS">
                <DrawerNavigator.Screen name="Home Page" component={Home} />
                <DrawerNavigator.Screen name="About" component={About} />
                <DrawerNavigator.Screen name="Registos" component={Registo} />
                <DrawerNavigator.Screen name="Cama 1" component={Cama} />
                <DrawerNavigator.Screen name="Medicação" component={Medicação} />
            </DrawerNavigator.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;
