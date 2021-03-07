import   React , {useCallback ,useEffect} from 'react';
import { Text, View, TouchableOpacity, Image, StatusBar, FlatList,StyleSheet } from 'react-native';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import HomeHeader from "../common/HomeHeader";
import { useSelector, useState,useDispatch } from 'react-redux';
import PropItem from '../components/PropItem';
import { addtoSaved } from "../store/actions/SavedAction";
const Home = props => {
    const { navigation } = props;
    const products = useSelector(state =>state.productReducer.availableProducts)
    const dispatch = useDispatch();

    const toggleSavedHandler  = useCallback((item)=>{
        dispatch(addtoSaved(item));
       },[dispatch])

    return (
        <View style={styles.container}>
            <HomeHeader 
             title="Home"
             onMenuClick={()=>{
             props.navigation.toggleDrawer()
            }}/>

            <FlatList
            data = {products}
            keyExtractor={item =>item.id}
            renderItem={
                itemData => <PropItem
                item = {itemData.item}
                onCallClick={()=>{}}
                onWhatsAppClick={()=>{}}
                onItemClick={()=>{}}
                onSavedClick={()=>{
                    toggleSavedHandler(itemData.item)
                }}
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
export default Home