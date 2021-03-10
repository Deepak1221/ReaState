import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { COLORS, icons } from "../constants"
import Setting from '../screens/Setting'
import AddProperty from '../screens/Addproperty'
import Tabs from './TabNavigation'

const Drawer = createDrawerNavigator();

const DrawerNav = props => {
    return (
        <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Tabs} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Add Property" component={AddProperty} />
      </Drawer.Navigator>
      </NavigationContainer>
    );
}

export default DrawerNav;