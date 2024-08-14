import React from "react";
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity } from "react-native";
import { logo } from "../utlis/images";

const MainScreen = ({ navigation }) => {

    const onPressContinue = () => {
        navigation.navigate('HomeScreen')
    }
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image source={logo} style={styles.iconImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Simple solution for your budget.</Text>
                <Text style={styles.subHeading}>Counter and distribute the income correctly...</Text>
                <TouchableOpacity style={styles.button} onPress={() => onPressContinue()}>
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        height: 389,
        width: Dimensions.get('window').width,
        borderRadius: 0,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60
    },
    iconImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch'
    },
    textContainer: {
        marginLeft: 40,
        marginRight: 40,
        marginTop: 160,
        // height: 69,
    },
    headingText: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold'
    },
    subHeading: {
        fontSize: 18,
        color: 'black',
        marginTop: 30
    },
    button: {
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 5,
        padding: 10,
        marginTop: 60,
        marginLeft: 64,
        height: 42,
        width: 194
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    }
});
export default MainScreen;