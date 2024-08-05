import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";

const AddTransactionScreen = () => {
    return (
        <View style={styles.fullSreenBGContainer}>
            <View style={styles.amountContainer}>
                <Text style={{ fontSize: 18, paddingHorizontal: 40, marginTop: 70 }}>How much?</Text>
                <Text style={{ fontSize: 40, fontWeight: '600', paddingHorizontal: 40, marginTop: 10 }}>₹ 66580</Text>
            </View>
            <View style={styles.flexContainer}>
                <View style={styles.flexColumns}>
                    <Text style={{ fontSize: 16, color: '#91919F' }}>Category</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/down-arrow.png')} style={styles.dropDownArrowImage}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexColumns}>
                    <Text style={{ fontSize: 16, color: '#91919F' }}>Description</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/down-arrow.png')} style={styles.dropDownArrowImage}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexColumnsWithButton}>
                    <TouchableOpacity style={{ backgroundColor: '#00A86B', borderRadius: 14, width: 80 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF', padding: 5, alignSelf: 'center' }}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FD3C4A', borderRadius: 14, width: 80 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF', padding: 5, alignSelf: 'center' }}>Expense</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.flexColumns}>
                    <Text style={{ fontSize: 16, color: '#91919F' }}>Pick you date</Text>
                    <TouchableOpacity>
                        <Image source={require('../assets/icons/down-arrow.png')} style={styles.dropDownArrowImage}></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity style={styles.continueButton}>
                <Text style={{ fontSize: 18, fontWeight:'600', color: '#FCFCFC', alignSelf: 'center' }}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    fullSreenBGContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#FFF6E5'
    },
    amountContainer: {
        height: 150,
        width: Dimensions.get('window').width,
    },
    flexContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 400,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
      // marginBottom: 50,
        borderRadius: 50,
        backgroundColor: 'white',
        //rowGap: 8,
        paddingVertical: 10,
        justifyContent: 'space-evenly'
    },
    flexColumns: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#262653',
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flexColumnsWithButton: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 12
    },
    dropDownArrowImage: {
        height: '20%',
        width: '35%',
        resizeMode: 'stretch',
        marginRight: 50
    },
    continueButton: {
        height: 50,
        borderRadius: 16,
        marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7F3DFF',
        marginTop: 40,
        marginBottom: 250
    }
})

export default AddTransactionScreen;