import   React , {useEffect,useCallback} from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar, FlatList,StyleSheet } from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import HomeHeader from "../common/HomeHeader";
import { useSelector, useState } from 'react-redux';
import PropItem from '../components/PropItem';
const Saved = props => {
    const { navigation } = props;
    const  savedproducts = useSelector(state =>state.savedReducer.savedItems)
    // console.log(savedproducts)
    // const toggleSavedHandler  = useCallback(()=>{
    //     console.log("hii i am in useCallback")
    //     savedproducts = useSelector(state =>state.savedReducer.savedItems)

    //    },[])

    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         console.log("hii i am in focus")
    //       // The screen is focused
    //       // Call any action
    //       toggleSavedHandler

    //     });
    
    //     // Return the function to unsubscribe from the event so it gets removed on unmount
    //     return unsubscribe;
    //   }, [navigation]);
    // useEffect(() => {
    //     // Interval to update count
 
    
    //     // Subscribe for the focus Listener
    //     const unsubscribe = navigation.addListener('focus', () => {
    //         savedproducts = useSelector(state =>state.savedReducer.savedItems)
    //     });
    
    //     return () => {
    //       // Clear setInterval in case of screen unmount
         
    //       // Unsubscribe for the focus Listener
    //       unsubscribe;
    //     };
    //   }, [navigation]);


    return (
        <View style={styles.container}>
            <HomeHeader 
             title="Saved"
             onMenuClick={()=>{
             props.navigation.toggleDrawer()
            }}/>

            <FlatList
            data = {savedproducts}
            keyExtractor={item =>item.id}
            renderItem={
                itemData => <PropItem
                item = {itemData.item}
                onCallClick={()=>{}}
                onWhatsAppClick={()=>{}}
                onItemClick={()=>{}}
                />
            }
            />
        </View>
    )
}

// Home.navigationOptions = (navigationData) => {
//     return {
//         headerTitle: "Home",
//         headerLeft: (
//             <TouchableOpacity onPress={() => {
//                 navigationData.navigation.toggleDrawer()
//             }}>
//                 <Image
//                     source={icons.home}
//                     resizeMode="contain"
//                 // style={styles.favIconStyle}
//                 />

//             </TouchableOpacity>
//         ),
//     }

// }

const styles = StyleSheet.create({
     container: {       
        paddingBottom:50,
    },
 

})
export default Saved