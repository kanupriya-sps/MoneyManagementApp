import React, { useState } from "react";
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, Image, FlatList } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

const TransactionsScreen = () => {

    const [selectedMonth, setSelectedMonth] = useState('Month');
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [openMonth, setOpenMonth] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

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
    ];

    const months = [
        { label: 'January', value: 'January' },
        { label: 'February', value: 'February' },
        { label: 'March', value: 'March' },
        { label: 'April', value: 'April' },
        { label: 'May', value: 'May' },
        { label: 'June', value: 'June' },
        { label: 'July', value: 'July' },
        { label: 'August', value: 'August' },
        { label: 'September', value: 'September' },
        { label: 'October', value: 'October' },
        { label: 'November', value: 'November' },
        { label: 'December', value: 'December' },
    ];

    const filters = [
        { label: 'All', value: 'All' },
        { label: 'Income', value: 'Income' },
        { label: 'Expense', value: 'Expense' },
    ];

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
                <DropDownPicker
                    open={openMonth}
                    value={selectedMonth}
                    items={months}
                    setOpen={setOpenMonth}
                    setValue={setSelectedMonth}
                    containerStyle={styles.dropDownOptionContainer}
                    style={styles.dropDownPicker}
                    dropDownContainerStyle={styles.dropDownListContainer}
                    placeholder="Month"
                />
                <DropDownPicker
                    open={openFilter}
                    value={selectedFilter}
                    items={filters}
                    setOpen={setOpenFilter}
                    setValue={setSelectedFilter}
                    containerStyle={styles.dropDownOptionContainer}
                    style={styles.dropDownPicker}
                    dropDownContainerStyle={styles.dropDownListContainer}
                    placeholder="All"
                />
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
        columnGap: 12,
        zIndex: 1000,
    },
    dropDownOptionContainer: {
        width: 120,
        borderRadius: 40,
        borderColor: 'black'
    },
    dropDownPicker: {
        backgroundColor: '#FFF6E5',
        borderColor: 'black',
        borderRadius: 40
      },
    dropDownListContainer: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgba(255, 255, 255, 1)',
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