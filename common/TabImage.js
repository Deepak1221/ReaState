import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar , StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { icons, images, SIZES, COLORS, FONTS } from '../constants' 

const TabImage = props =>{
    return(
    <Image
    source ={props.img}
    resizeMode="contain"
    style={{
        width:SIZES.tabBarSize,
        height:SIZES.tabBarSize,
        tintColor: props.color
    }}
    />)

}
export default TabImage