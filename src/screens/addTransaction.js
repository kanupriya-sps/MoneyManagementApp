import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Modal, TextInput, Keyboard } from "react-native";
import { useDispatch } from 'react-redux';

import DropDownPicker from 'react-native-dropdown-picker';
import { Calendar } from 'react-native-calendars';
import { addTransaction } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";

const AddTransactionScreen = () => {

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [selectedCategory, setSelectedCategory] = useState('Category');
    const [openCategory, setOpenCategory] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('Description');
    const [openDescription, setOpenDescription] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Pick your date');
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [transactionType, setTransactionType] = useState(null);
    const [amount, setAmount] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const categories = [
        { label: 'Salary', value: 'Salary' },
        { label: 'Income', value: 'Income' },
        { label: 'Food', value: 'Food' },
        { label: 'Grocery', value: 'Grocery' },
        { label: 'Subscription', value: 'Subscription' },
        { label: 'Shopping', value: 'Shopping' },
    ];
    const descriptions = [
        { label: 'Salary', value: 'Salary' },
        { label: 'Income', value: 'Income' },
        { label: 'Food', value: 'Food' },
        { label: 'Grocery', value: 'Grocery' },
        { label: 'Subscription', value: 'Subscription' },
        { label: 'Shopping', value: 'Shopping' },
    ];

    const handleSubmit = () => {
        const transaction = {
            id: new Date().getTime(), // Generate a unique ID
            category: selectedCategory,
            description: selectedDescription,
            type: transactionType,
            amount: transactionType === 'Income' ? `+ ${amount}` : `- ${amount}`, // Example amount, replace with your input
            month: new Date(selectedDate).toLocaleString('default', { month: 'long' }),
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
            date: selectedDate
        };

        dispatch(addTransaction(transaction));

        // Reset form
        setSelectedCategory(null);
        setSelectedDescription(null);
        setSelectedDate(null);
        setTransactionType(null);
        setAmount(null);

        // Navigate to Transactions screen
        navigation.navigate('TransactionsScreen');
    };
    return (
        <View style={styles.fullSreenBGContainer}>
            {/* need to make this text input */}
            <View style={styles.amountContainer}>
                <Text style={styles.amountContainerHeadingText}>How much?</Text>
                {!isFocused && !amount && (
                    <Text style={styles.placeholderText}>Enter amount</Text>
                )}
                <TextInput
                    style={styles.amountInput}
                    //placeholder="Enter amount"
                    value={amount}
                    onChangeText={setAmount}
                    keyboardType="numeric"
                    returnKeyType="done"
                    onSubmitEditing={Keyboard.dismiss}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
            </View>
            <View style={styles.flexContainer}>
                <DropDownPicker
                    open={openCategory}
                    value={selectedCategory}
                    items={categories}
                    setOpen={setOpenCategory}
                    setValue={setSelectedCategory}
                    containerStyle={styles.flexColumns}
                    style={styles.flexColumnsPicker}
                    dropDownContainerStyle={styles.dropDownListContainer}
                    placeholder="Category"
                    zIndex={3000}
                    zIndexInverse={1000}
                />
                <DropDownPicker
                    open={openDescription}
                    value={selectedDescription}
                    items={descriptions}
                    setOpen={setOpenDescription}
                    setValue={setSelectedDescription}
                    containerStyle={styles.flexColumns}
                    style={styles.flexColumnsPicker}
                    dropDownContainerStyle={styles.dropDownListContainer}
                    placeholder="Description"
                    zIndex={2000}
                    zIndexInverse={2000}
                />
                <View style={styles.flexColumnsWithButton}>
                    <TouchableOpacity style={styles.incomeButton}
                        onPress={() => setTransactionType('Income')}>
                        <Text style={styles.incomeButtonText}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.expenseButton}
                        onPress={() => setTransactionType('Expense')}>
                        <Text style={styles.expenseButtonText}>Expense</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.dateContainer} onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
                    {selectedDate == null ? (
                        <Text style={styles.dateText}>Pick Your Date</Text>
                    ) : (
                        <Text style={styles.dateText}>{selectedDate}</Text>
                    )}
                </TouchableOpacity>
                {isCalendarVisible && (
                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={isCalendarVisible}
                        onRequestClose={() => setIsCalendarVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.calendarContainer}>
                                <Calendar
                                    onDayPress={day => {
                                        setIsCalendarVisible(false);
                                        setSelectedDate(day.dateString);
                                    }}
                                    style={styles.calendar}
                                />
                                <TouchableOpacity onPress={() => setIsCalendarVisible(false)} style={styles.closeButton}>
                                    <Text style={{ color: 'white' }}>Close</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                )}
            </View>
            <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
                <Text style={styles.continueButtonText}>Continue</Text>
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
    amountContainerHeadingText: {
        fontSize: 18,
        paddingHorizontal: 40,
        marginTop: 70
    },
    placeholderText: {
        fontSize: 14,  // Smaller size for placeholder
        color: '#91919F',
        position: 'absolute',
        paddingHorizontal: 40,
        marginTop: 110,
    },
    amountInput: {
        fontSize: 40,
        fontWeight: '600',
        paddingHorizontal: 40,
        marginTop: 10,
        color: 'black',
    },
    flexContainer: {
        zIndex: 1,
        flex: 1,
        flexDirection: 'column',
        height: 400,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 50,
        backgroundColor: 'white',
        paddingVertical: 10,
        justifyContent: 'space-evenly'
    },
    flexColumns: {
        width: '90%',
        borderColor: '#262653',
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    flexColumnsPicker: {
        borderColor: 'black',
        borderRadius: 16
    },
    dropDownListContainer: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'rgba(255, 255, 255, 1)',
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
    incomeButton: {
        backgroundColor: '#00A86B',
        borderRadius: 14,
        width: 80
    },
    incomeButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 5,
        alignSelf: 'center'
    },
    expenseButton: {
        backgroundColor: '#FD3C4A',
        borderRadius: 14,
        width: 80
    },
    expenseButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FFFFFF',
        padding: 5,
        alignSelf: 'center'
    },
    dateContainer: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        flexDirection: 'row',
        borderColor: '#262653',
        borderRadius: 16,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        color: '#91919F'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    calendarContainer: {
        width: Dimensions.get('window').width - 40,
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden'
    },
    calendar: {
        borderRadius: 10
    },
    closeButton: {
        backgroundColor: '#7F3DFF',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
    },
    continueButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#FCFCFC',
        alignSelf: 'center'
    }
})

export default AddTransactionScreen;