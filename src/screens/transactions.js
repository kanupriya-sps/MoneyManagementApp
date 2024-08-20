import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity, Image, FlatList } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { setSelectedMonth, setSelectedFilter } from "../redux/actions";

const TransactionsScreen = () => {

    const dispatch = useDispatch();
    const { transactions, selectedMonth, selectedFilter } = useSelector(state => state);
    console.log('Before dispatching: ', { selectedMonth, selectedFilter });

    const [openMonth, setOpenMonth] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);

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

    const filteredData = transactions.filter(item => {
        const monthMatch = selectedMonth === 'Month' || item.month === selectedMonth;
        const filterMatch = selectedFilter === 'All' || item.type === selectedFilter;
        return monthMatch && filterMatch;
    });

    const flatListItem = ({ item }) => {
        return (
            <View style={styles.listItemViewContainer}>
                <View style={styles.listItemDetailContainer}>
                    <Text style={styles.categoryText}>{item.category}</Text>
                    <Text style={styles.amountText}>{item.amount}</Text>
                </View>
                <View style={styles.listItemDetailContainer}>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                    <Text style={styles.timeText}>{item.time}</Text>
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
                    setValue={(callback) => {
                        const value = callback(selectedMonth); // Using the callback to get the new value
                        dispatch(setSelectedMonth(value));
                    }}
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
                    setValue={(callback) => {
                        const value = callback(selectedFilter); // Using the callback to get the new value
                        dispatch(setSelectedFilter(value));
                    }}
                    containerStyle={styles.dropDownOptionContainer}
                    style={styles.dropDownPicker}
                    dropDownContainerStyle={styles.dropDownListContainer}
                    placeholder="All"
                />
            </View>
            <View style={styles.listViewContainer}>
                <FlatList
                    data={filteredData}
                    renderItem={flatListItem}
                    keyExtractor={item => item.id.toString()}
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
        marginBottom: 80,
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
    },
    categoryText: {
        fontSize: 16,
        color: 'black'
    },
    descriptionText: {
        fontSize: 13,
        color: '#91919F'
    },
    amountText: {
        fontSize: 16,
        color: '#FD3C4A'
    },
    timeText: {
        fontSize: 13,
        color: '#91919F'
    }
});

export default TransactionsScreen;