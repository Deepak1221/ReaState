import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar , StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { useSelector, useState } from 'react-redux';

const HomeHeader = props => {
    // const savedCount = useSelector(state =>state.savedReducer.savedCount)

    return (
        <View style={ styles.headerContainer }>
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                onPress={props.onMenuClick}
            >
                <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
            </TouchableOpacity>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    // style={{
                    //     width: '70%',
                    //     height: "100%",
                    //     backgroundColor: COLORS.lightGray3,
                    //     alignItems: 'center',
                    //     justifyContent: 'center',
                    //     borderRadius: SIZES.radius
                    // }}
                >
                    <Text style={{ ...FONTS.h3 }}>{props.title}</Text>
                </View>
            </View>

            <TouchableOpacity
                style={{
                    width: 50,
                    paddingRight: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
            >
              {/* { savedCount >0 ? <Text>{savedCount}</Text>:null } */}
                
                <Image
                    source={icons.bell}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    headerContainer: {
      backgroundColor:COLORS.white,
       flexDirection: 'row', 
       height: 50 ,
       borderBottomWidth:1,
       borderBottomColor:COLORS.lightGray ,
       
           shadowColor:'blue',
           shadowRadius:2,
           shadowOpacity: 0.40,
           textShadowOffset:{width:1 , height:1},
           elevation:2 ,
    }
  });
export default HomeHeader ;