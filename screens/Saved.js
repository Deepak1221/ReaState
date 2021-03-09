import   React , {useEffect,useCallback} from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar, FlatList,StyleSheet } from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import HomeHeader from "../common/HomeHeader";
import { useSelector, useState } from 'react-redux';
import PropItem from '../components/PropItem';
import EmptyView from "../common/EmptyView";
const Saved = props => {
    const { navigation } = props;
    const  savedproducts = useSelector(state =>state.savedReducer.savedItems)
    const  savedCount = useSelector(state =>state.savedReducer.savedCount)
    if(savedCount<1) {
        return (
        <EmptyView
         msg = "No Saved Item Found"

            />
        )
    }
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