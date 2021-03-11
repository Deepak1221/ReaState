import * as React from 'react';
import { Text, View, Modal, StyleSheet, Pressable, Alert, ScrollView, FlatList, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import LIST_COUNTRY from '../data/CountryListData'
import DropDown from '../models/DropDown';
import ModelDropDown from '../common/ModalDropDown'
import Input from '../common/Input';
import { icons } from '../constants';


const AddProperty = props => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View>
            <Input
             id="description"
             label="Description"
             errorText="Please select one"
             keyboardType="default"
             autoCapitalize="sentences"
             placeholder='Select two'            
             autoCorrect
             multiline={false}
             numberOfLines={1}
            //  onInputChange={inputChangeHandler}
            //  initialValue={editedProduct ? editedProduct.description : ''}
            //  initiallyValid={!!editedProduct}
             required
             minLength={1}/>
            <ModelDropDown
                title="Select Option"
                visible={modalVisible}
                onDismiss={() => {
                    setModalVisible(!modalVisible)
                }}
                onItemClick={(label, value) => {
                    //console.log(label + value)
                    setModalVisible(!modalVisible)
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        width: "100%",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        width: "100%",
        minHeight: 300,
        maxHeight: 500,
        backgroundColor: "white",
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        padding: 35,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalBack: {
        backgroundColor: "#000000"
    }
});
export default AddProperty