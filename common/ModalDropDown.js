import * as React from 'react';
import { Text, View, Modal, StyleSheet, Platform, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native';

import LIST_COUNTRY from '../data/CountryListData'

import { icons } from '../constants';

const ModalDropDown = props => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
                statusBarTranslucent={true}
                onRequestClose={props.onDismiss}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.containerHori}>
                            <Text style={styles.titleStyle}>{props.title}</Text>
                            <TouchableOpacity
                                onPress={props.onDismiss}
                            >
                                <Image
                                    style={styles.imgCancleStyle}
                                    source={icons.cross}
                                />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={LIST_COUNTRY}
                            renderItem={itemData =>
                             <TouchableOpacity style={styles.itemTxtContainer} 
                             onPress={props.onItemClick.bind(this , itemData.item.label ,itemData.item.value)} >
                             <Text style={styles.itemTxtStyle}>{itemData.item.value}</Text>
                            </TouchableOpacity>} />
                    </View>

                </View>

            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",        
        backgroundColor:"#00000070",
         
    },
    modalView: {
        width: "100%",
        minHeight: 300,
        maxHeight: 500,
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        shadowColor: "#000",
        padding: 10,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalBack: {
        backgroundColor: "#000000"
    },

    containerHori: {
        flexDirection: 'row',
        paddingTop: 8,
    },
    titleStyle: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 8

    }
    ,
    imgCancleStyle: {
        width: 18,
        height: 18,
        marginEnd: 8,

    },
    itemTxtStyle: {
        width: '100%',
        flex: 1,
        fontSize: 16,

    },
    itemTxtContainer: {
        width: '100%',
        flex: 1,
        paddingBottom: 10,
        paddingTop: 10,
    }

});
export default ModalDropDown