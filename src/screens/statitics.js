import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import PieChart from 'react-native-pie-chart';
import ProgressBarComponent from "../components/ProgressBarComponent";
import DropDownPicker from 'react-native-dropdown-picker';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedMonth } from "../redux/actions";

const StatiticsScreen = () => {

    const [activeButton, setActiveButton] = useState('Expense');
    const [openMonth, setOpenMonth] = useState(false);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const transactions = useSelector(state => state.transactions);
    const selectedMonth = useSelector(state => state.selectedMonth);
    const dispatch = useDispatch();

    useEffect(() => {
        filterTransactions('Expense'); // Default to Expense
    }, [selectedMonth, transactions]);

    const handlePress = (button) => {
        setActiveButton(button);
        filterTransactions(button);
    };

    const filterTransactions = (type) => {
        const filtered = transactions
            .filter(transaction => transaction.type === type && transaction.month === selectedMonth)
            .map(transaction => ({
                ...transaction,
                color: getRandomColor(),
            }));
        setFilteredTransactions(filtered);
    };

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const calculatePieData = () => {
        const groupedData = {};

        filteredTransactions.forEach(transaction => {
            const amount = Math.abs(parseFloat(transaction.amount.replace(/[^\d.-]/g, '')));
            if (groupedData[transaction.category]) {
                groupedData[transaction.category] += amount;
            } else {
                groupedData[transaction.category] = amount;
            }
        });
        const data = Object.values(groupedData);
        const labels = Object.keys(groupedData);

        if (data.length === 0 || data.reduce((sum, value) => sum + value, 0) === 0) {
            return { data: [1], labels: ['No Data'] };
        }
        return { data, labels };
    };

    const { data, labels } = calculatePieData();
    const colors = ['#FCAC12', '#7F3DFF', '#FD3C4A', '#00A86B', '#FFC300', '#FF5733'];
    const totalAmount = data.reduce((sum, value) => sum + value, 0);

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

    return (
        <View style={styles.fullSreenBGContainer}>
            <DropDownPicker
                open={openMonth}
                value={selectedMonth}
                items={months}
                setOpen={setOpenMonth}
                setValue={(callback) => dispatch(setSelectedMonth(callback()))}
                containerStyle={styles.dropDownOptionContainer}
                style={styles.dropDownPicker}
                dropDownContainerStyle={styles.dropDownListContainer}
                placeholder="Month"
            />
            <View style={styles.pieContainer}>
                <PieChart
                    widthAndHeight={190}
                    series={data}
                    sliceColor={colors.slice(0, data.length)}
                    coverRadius={0.7}
                    coverFill={'#FFF6E5'}
                />
                <Text style={{ fontSize: 25, fontWeight: '700', position: 'absolute' }}>₹ {totalAmount}</Text>
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
            <View style={{ marginTop: 20, marginBottom: 50 }}>
                <ProgressBarComponent transactions={filteredTransactions} />
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
    dropDownOptionContainer: {
        height: 40,
        width: 150,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#F1F1FA',
        marginTop: 45,
        alignSelf: 'center',
    },
    dropDownPicker: {
        backgroundColor: '#FFF6E5',
        borderColor: '#F1F1FA',
        borderRadius: 40
    },
    dropDownListContainer: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F1F1FA',
        backgroundColor: '#FFF6E5' //rgba(255, 255, 255, 1)',
    },
    pieContainer: {
        height: 190,
        width: 190,
        borderRadius: 95,
        marginTop: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
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
    },
    listItemViewContainer: {
        height: 50,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    progressBar: {
        marginHorizontal: 10,
    },
});

export default StatiticsScreen;