import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";

const StatiticsScreen = () => {

    const [activeButton, setActiveButton] = useState('Expense');

    const handlePress = (button) => {
        setActiveButton(button);
    };

    return (
        <View style={styles.fullSreenBGContainer}>
            <TouchableOpacity style={styles.monthContainer}>
                <Image source={require('../assets/icons/down-arrow.png')} style={styles.dropDownArrowImage} ></Image>
                <Text style={{ fontSize: 14, color: '#212325' }}>Month</Text>
            </TouchableOpacity>
            <View style={styles.pieContainer}>
                <Text style={{ fontSize: 25, fontWeight: '700' }}>₹ 9400.0</Text>
            </View>
            <View style={styles.segmentContainer}>
                <TouchableOpacity
                    style={[
                        styles.segmentButtons,
                        activeButton === 'Expense' ? styles.activeButton : styles.inactiveButton
                    ]}
                    onPress={() => handlePress('Expense')}>
                    <Text
                        style={[
                            styles.segmentText,
                            activeButton === 'Expense' ? styles.activeText : styles.inactiveText
                        ]} >Expense</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.segmentButtons,
                        activeButton === 'Income' ? styles.activeButton : styles.inactiveButton
                    ]}
                    onPress={() => handlePress('Income')}>
                    <Text
                        style={[
                            styles.segmentText,
                            activeButton === 'Income' ? styles.activeText : styles.inactiveText
                        ]} >Income</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    fullSreenBGContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#FFF6E5'
    },
    monthContainer: {
        height: 40,
        width: 96,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#F1F1FA',
        marginTop: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dropDownArrowImage: {
        height: '15%',
        width: '15%',
        resizeMode: 'stretch',
        marginRight: 10
    },
    pieContainer: {
        height: 190,
        width: 190,
        borderRadius: 95,
        marginTop: 30,
        borderWidth: 24,
        borderColor: '#FCAC12',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    segmentContainer: {
        height: 60,
        borderRadius: 30,
        marginTop: 40,
        marginHorizontal: 10,
        backgroundColor: '#FFFEFE',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    segmentButtons: {
        height: 48,
        width: '50%',
        backgroundColor: '#FD3C4A',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activeButton: {
        backgroundColor: '#FD3C4A'
    },
    inactiveButton: {
        backgroundColor: '#FFFEFE'
    },
    segmentText: {
        fontSize: 16,
        fontWeight: '600',
    },
    activeText: {
        color: 'white'
    },
    inactiveText: {
        color: 'black'
    }
});

export default StatiticsScreen;