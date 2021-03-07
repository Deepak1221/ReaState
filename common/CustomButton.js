import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet ,Platform,TouchableNativeFeedback } from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const CustomButton = props => {
    let TouchableView = TouchableOpacity
    if(Platform.OS ==='android'){
        TouchableView  =TouchableNativeFeedback 
    }
    return (
        <TouchableView onPress={()=>{props.onClick}} style={{ ...styles.buttonContainer, ...props.style }}>
            <View style={{ ...styles.buttonContainer, ...props.style }}>
                <Text style={styles.buttonTxt}>{props.title}</Text>
            </View>
        </TouchableView>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        height: 35,
        margin: 2,
        shadowColor: 'black',
        backgroundColor: COLORS.primary,        
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 4,
        shadowOpacity: 0.26,
        justifyContent:'center',
        alignContent:'center',
        paddingStart:10,
        paddingEnd:10,

    },

    buttonTxt: {
       color:COLORS.white,
       ...FONTS.body3,
       alignSelf:'center'


    },

})
export default CustomButton;
