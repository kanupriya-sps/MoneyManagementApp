import React from "react";
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, Image, FlatList } from "react-native";

const TransactionsScreen = () => {

    const listData = [
        {
            id: 1,
            category: 'Shopping',
            description: 'Buy some grocery',
            amount: '- 5120',
            time: '10:00 AM'
        },
        {
            id: 2,
            category: 'Food',
            description: 'Arabian Hut',
            amount: '- 532',
            time: '07:30 PM'
        },
        {
            id: 3,
            category: 'Salary',
            description: 'Salary for august',
            amount: '+ 5000',
            time: '03:30 PM'
        },
        {
            id: 4,
            category: 'Subsription',
            description: 'Disney + Annual',
            amount: '- 1180',
            time: '10:00 PM'
        },
        {
            id: 5,
            category: 'Fuel',
            description: 'kozhikode',
            amount: '- 1000',
            time: '07:30 PM'
        },
        {
            id: 6,
            category: 'Cinema',
            description: 'lulu mall',
            amount: '- 507',
            time: '02:45 PM'
        },
        {
            id: 7,
            category: 'Loan',
            description: 'Car loan',
            amount: '- 4700',
            time: '11:20 AM'
        },
    ]

    const flatListItem = (listData) => {
        return (
            <View style={styles.listItemViewContainer}>
                <View style={styles.listItemDetailContainer}>
                    <Text style={{ fontSize: 16, color: 'black' }}>{listData?.item?.category}</Text>
                    <Text style={{ fontSize: 16, color: '#FD3C4A' }}>{listData?.item?.amount}</Text>
                </View>
                <View style={styles.listItemDetailContainer}>
                    <Text style={{ fontSize: 13, color: '#91919F' }}>{listData?.item?.description}</Text>
                    <Text style={{ fontSize: 13, color: '#91919F' }}>{listData?.item?.time}</Text>
                </View>
            </View>
        )
    };

    return (
        <View style={styles.fullScreenContainer}>
            <View style={styles.dropDownViewContainer}>
                <TouchableOpacity style={styles.dropDownOptionContainer}>
                    <Image source={require('../assets/icons/down-arrow.png')} style={styles.dropDownArrowImage} />
                    <Text>Month</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.dropDownOptionContainer}>
                    <Image source={require('../assets/icons/down-arrow.png')} style={styles.dropDownArrowImage} />
                    <Text>All</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listViewContainer}>
                <FlatList
                    data={listData}
                    renderItem={flatListItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    fullScreenContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#FFF6E5'
    },
    dropDownViewContainer: {
        height: 64,
        width: Dimensions.get('window').width,
        paddingLeft: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        columnGap: 12
    },
    dropDownOptionContainer: {
        height: 40,
        width: 96,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'black',
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
    listViewContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        marginTop: 20,
        paddingHorizontal: 8
    },
    listItemViewContainer: {
        height: 80,
        paddingHorizontal: 20,
        paddingVertical: 7,
        backgroundColor: '#FDFCFC',
        flexDirection: 'column',
        justifyContent: 'center',
        marginVertical: 8,
        borderRadius: 12,
    },
    listItemDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

export default TransactionsScreen;
//#FFF6E5