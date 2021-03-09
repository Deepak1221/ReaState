import   React , {useEffect,useCallback} from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'


const EmptyView = props =>{
    return (
        <View style={styles.container}>
            <Image
            source= {props.img}/>
            <Text style={styles.txtMsg}>{props.msg}</Text>

        </View>
    )

   
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignContent:'center',
        justifyContent:'center',
    
    },
    txtMsg: {
        alignSelf:'center',         
        color:COLORS.black,
        ...FONTS.h2        
    },
})

export default EmptyView