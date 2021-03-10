import * as React from 'react';
import { Text, View, TouchableOpacity, Image, StyleSheet, ImageBackground, Button} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CardView from '../common/CardView';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import CustomButton from "../common/CustomButton"; 

const PropItem = props => {
    const item = props.item
    return (
        <CardView style={styles.styleCard}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    style={styles.styleImage}
                    source={{uri:item.imageUrl}}
                >
                    <TouchableOpacity
                    onPress={props.onSavedClick}
                    style={styles.styeleWhiteCircle}>
                        <Image
                            style={styles.styeleIcon}
                            source={ item.isfav ? icons.heart_filled : icons.heart } />
                    </TouchableOpacity>


                </ImageBackground>
            </View>

            {/* //Title and action button */}
            <View style={styles.styeleTextContainer}>

                <View>
                    <Text style={styles.styelePriceTxt}>680,085 USD</Text>
                </View>
                <Text 
                 numberOfLines={1} ellipsizeMode='tail'
                style={{ ...FONTS.body4 }}
                >{item._source.en.title}
                </Text>
                <View style={styles.styeleAttributeContainer}>

                    <View style={styles.styeleAttribute}>
                        <Image
                            style={styles.styeleIcon}
                            source={icons.home} />
                        <Text style={{ ...FONTS.body4, ...styles.styeleAttributeText }}>4 Beds</Text>
                    </View>
                    <View style={styles.styeleAttribute}>
                        <Image
                            style={styles.styeleIcon}
                            source={icons.home} />
                        <Text style={{ ...FONTS.body4, ...styles.styeleAttributeText }}>4 Baths</Text>
                    </View>
                    <View style={styles.styeleAttribute}>
                        <Image
                            style={styles.styeleIcon}
                            source={icons.home} />
                        <Text style={{ ...FONTS.body4, ...styles.styeleAttributeText }}>400 SQFT</Text>
                    </View>
                </View >
               
               
                <View
                    style={{
                        borderBottomColor: '#cccccc',
                        borderBottomWidth: 0.5,
                        marginTop:8
                    }}>
                    </View>
                <View style={{ ...styles.styleRow, ...styles.styleButtonContainer }}>
                    <CustomButton
                        title='WhatsApp'
                        style={styles.styleButtonWhatsApp}
                        onClick={()=>{}}
                         />
                    <CustomButton 
                     title='Call Now' 
                     style={styles.styleButtonDefautl}
                     onClick={()=>{}}/>
                </View>

            </View>

        </CardView>

    )
}

const styles = StyleSheet.create({
    styleCard: {
        height: 350,


    },
    styleImage: {
        height: "100%",
        width: "100%",
        backgroundColor:COLORS.lightGray4

    },
    imageContainer: {
        height: "55%",
        width: "100%",
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
        overflow: 'hidden'

    },
    styeleIcon: {
        height: 18,
        width: 18,
        tintColor: COLORS.tintColor

    },
    styeleWhiteCircle: {
        borderRadius: 50,
        backgroundColor: 'white',
        alignSelf: 'flex-end',
        margin: 8,
        padding: 5
    },
    styeleTextContainer: {
        height: '45%',
        width: '100%',
        padding: 10,


    },
    styeleAttributeContainer: {
        flexDirection: "row",
        marginTop: 8,
        alignContent: 'space-between'
        },
    styeleAttribute: {
        flexDirection: "row",
        marginTop: 1,
        flex: 1,

    },
    styeleAttributeText: {
        marginStart: 5,
        fontWeight: "bold",
        color: COLORS.orangeColor,


    },

    styeleApproxTxt: {
        marginTop: 5,
        ...FONTS.body4,
        color: COLORS.primary


    },

    styelePriceTxt: {
        ...FONTS.h2,
        color: COLORS.primary,
        fontWeight: "bold"

    },
    styleRow: {
        flexDirection: 'row'
    },
    styleButtonContainer: {
        flex: 1,
        marginTop:12,
        justifyContent:'space-between'

    },
    styleButtonDefautl: {
        flex: 1,
        backgroundColor:COLORS.primary,
        marginStart:8
    },

    styleButtonWhatsApp: {
        flex: 1,
        backgroundColor:COLORS.greenWhatsApp,
        marginEnd:8
    },
    title:{
        
    },

})
export default PropItem;