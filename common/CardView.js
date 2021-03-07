import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const CardView = props => {
    return (
        <View style={{ ...styles.cardContainer, ...props.style }}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        height: 300,
        margin: 10,
        shadowColor: 'black',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        borderRadius: 10,
        backgroundColor: 'white',
        shadowOpacity: 0.26,

    },

})
export default CardView;
