import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, Modal } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const AddTransactionScreen = () => {

    const [selectedCategory, setSelectedCategory] = useState('Category');
    const [openCategory, setOpenCategory] = useState(false);
    const [selectedDescription, setSelectedDescription] = useState('Description');
    const [openDescription, setOpenDescription] = useState(false);
    const [selectedDate, setSelectedDate] = useState('Pick your date');
    const [isCalendarVisible, setIsCalendarVisible] = useState(false);
    const [transactionType, setTransactionType] = useState(null);

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
    const handleContinue = () => {
        const transactionData = {
            category: selectedCategory,
            description: selectedDescription,
            date: selectedDate,
            type: transactionType,
        };
        console.log("transactionData" ,transactionData); // You can store this object or send it to a backend service
    };

    return (
        <View style={styles.fullSreenBGContainer}>
            {/* need to make this text input */}
            <View style={styles.amountContainer}>
                <Text style={{ fontSize: 18, paddingHorizontal: 40, marginTop: 70 }}>How much?</Text>
                <Text style={{ fontSize: 40, fontWeight: '600', paddingHorizontal: 40, marginTop: 10 }}>₹ 66580</Text>
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
                    <TouchableOpacity style={{ backgroundColor: '#00A86B', borderRadius: 14, width: 80 }}
                        onPress={() => setTransactionType('Income')}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF', padding: 5, alignSelf: 'center' }}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: '#FD3C4A', borderRadius: 14, width: 80 }}
                        onPress={() => setTransactionType('Expense')}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#FFFFFF', padding: 5, alignSelf: 'center' }}>Expense</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.dateContainer} onPress={() => setIsCalendarVisible(!isCalendarVisible)}>
                    {selectedDate == null ? (
                        <Text style={{ fontSize: 16, color: '#91919F' }}>Pick Your Date</Text>
                    ) : (
                        <Text style={{ fontSize: 16, color: '#91919F' }}>{selectedDate}</Text>
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
            <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#FCFCFC', alignSelf: 'center' }}>Continue</Text>
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
    }
})

export default AddTransactionScreen;