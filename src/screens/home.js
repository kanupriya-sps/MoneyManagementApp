import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Image, Text, ImageBackground, TouchableOpacity, FlatList } from "react-native";
import { useSelector } from 'react-redux';
import { homeBG, logo, arrowDown, incomeSq, arrowUp, expenseSq } from "../utlis/images";

const HomeScreen = ({ navigation }) => {

    const dataList = ['Today', 'Week', 'Month', 'Year'];
    const [selectedItem, setSelectedItem] = useState('Today');
    const username = useSelector(state => state.username);
    const currentDate = new Date();
    const dateName = currentDate.toISOString().split('T')[0];
    const monthName = currentDate.toLocaleString('en-US', { month: 'long' });
    const dayName = currentDate.toLocaleString('en-US', { weekday: 'long' });
    const yearName = currentDate.getFullYear();

    const transactions = useSelector(state => state.transactions);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    const onPressViewAll = () => {
        navigation.navigate('Transactions')
    }

    const FilterItem = ({ item }) => {
        const isSelected = item === selectedItem;
        return (
            <TouchableOpacity style={[styles.itemContainer, isSelected ? styles.selectedItem : null]}
                onPress={() => setSelectedItem(item)}>
                <Text style={{ fontSize: 14, color: '#FFFFFF' }}>{item}</Text>
            </TouchableOpacity>
        )
    };

    const filterTransactionsArray = () => {
        switch (selectedItem) {
            case 'Today':
                return transactions.filter(item => item.date === dateName)
            case 'Week':
                const endDate = new Date();
                const startDate = new Date();
                endDate.setDate(currentDate.getDate() + 6);
                startDate.setDate(currentDate.getDate() - 1)
                return transactions.filter(item => {
                    const transactionDate = new Date(item.date);
                    return transactionDate >= startDate && transactionDate <= endDate;
                });
            case 'Month':
                return transactions.filter(item => new Date(item.date).toLocaleString('en-US', { month: 'long' }) === monthName);
            case 'Year':
                return transactions.filter(item => new Date(item.date).getFullYear() === yearName);
        }
    };

    useEffect(() => {
        setFilteredTransactions(filterTransactionsArray());
    }, [selectedItem, transactions]);

    const renderTransactionItem = ({ item }) => {
        const isIncome = item.type === 'Income';
        const arrowStyle = isIncome
            ? { transform: [{ rotate: '0deg' }], tintColor: 'green' } // Arrow pointing up (green)
            : { transform: [{ rotate: '180deg' }], tintColor: 'red' };
        return (
            <View style={styles.singleTransactionContainer}>
                <View style={[styles.transactionArrowImageContainer, { flex: 1.2 }]}>
                    <Image source={require('../assets/icons/arrow-up.png')} style={[styles.transactionArrowImage, arrowStyle]} />
                </View>
                <Text style={{ flex: 5.5, fontSize: 22 }}>{`₹ ${item.amount.replace(/^[+-]\s*/, '')}`}</Text>
                <Text style={{ flex: 2, fontSize: 15, color: '#767474' }}>{item.type}</Text>
            </View>
        );
    };

    const calculateTotals = (type) => {
        return transactions
            .filter(transaction => transaction.type === type)
            .reduce((total, transaction) => {
                const amount = parseFloat(transaction.amount.replace(/[^\d.-]/g, ''));
                return type === 'Income' ? total + amount : total + Math.abs(amount);
            }, 0)
            .toFixed(2);
    };

    const totalIncome = calculateTotals('Income');
    const totalExpense = calculateTotals('Expense');
    const accountBalance = (totalIncome - totalExpense).toFixed(2);

    return (
        <View style={styles.fullScreenContainer}>
            <View style={styles.imageContainer}>
                <ImageBackground source={homeBG} style={styles.bgImage}>
                    <View style={styles.detailContainer}>
                        <View style={{ flex: 4 }}>
                            <Text style={{ fontSize: 15 }}>{dayName.toUpperCase()} {currentDate.getDate()}{'\n'}{monthName.toUpperCase()}</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.userImageContainerBorder}>
                                <View style={styles.userImageContainer}>
                                    <Image source={logo} style={styles.userImage} />
                                </View>
                            </View>
                        </View>
                        <View style={styles.usernameContainer}>
                            <Text style={{ fontSize: 15 }}>{username.toUpperCase()}</Text>
                        </View>
                    </View>
                    <View style={styles.dividingLineContainer} />
                    <View style={styles.amountContainer}>
                        <Text style={styles.amountHeadingText}>Account Balance</Text>
                        <Text style={styles.amountText}>{accountBalance}</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.incomeContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={arrowDown} style={styles.iconImageUp} />
                                <Image source={incomeSq} style={styles.iconImageDown} />
                            </View>
                            <Text style={styles.buttonText}>Income{'\n'}{totalIncome}</Text>
                        </View>
                        <View style={styles.expensesContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={arrowUp} style={styles.iconImageUp} />
                                <Image source={expenseSq} style={styles.iconImageDown} />
                            </View>
                            <Text style={styles.buttonText}>Expenses{'\n'}{totalExpense}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.timeContainer}>
                <FlatList
                    data={dataList}
                    renderItem={FilterItem}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal={true}
                />
            </View>
            <View style={styles.transactionHeadingContainer}>
                <Text style={styles.transactionHeadingText}>Recent Transaction</Text>
                <TouchableOpacity onPress={() => onPressViewAll()}>
                    <Text style={styles.transactionHeadingText}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={filteredTransactions.slice(0, 3)}
                renderItem={renderTransactionItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.transactionsContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    fullScreenContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#A89696'
    },
    imageContainer: {
        height: 389,
        width: Dimensions.get('window').width,
        borderRadius: 0,
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
        overflow: 'hidden',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        justifyContent: 'flex-start'
    },
    detailContainer: {
        flexDirection: 'row',
        height: 55,
        marginTop: 70,
        marginLeft: 30,
        marginRight: 30
    },
    userImageContainerBorder: {
        height: 42,
        width: 42,
        borderRadius: 21,
        borderWidth: 2,
        borderColor: '#AD00FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userImageContainer: {
        height: 32,
        width: 32,
        borderRadius: 16,
        alignSelf: 'center',
        overflow: 'hidden'
    },
    userImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    usernameContainer: {
        flex: 2,
        paddingTop: 12
    },
    dividingLineContainer: {
        height: 1,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: '#525252'
    },
    amountContainer: {
        padding: 30,
        alignSelf: 'center'
    },
    amountHeadingText: {
        fontSize: 14,
        color: '#91919F',
        alignSelf: 'center'
    },
    amountText: {
        fontSize: 40,
        color: '#black',
        fontWeight: 'bold',
        marginTop: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 80,
    },
    incomeContainer: {
        flexDirection: 'row',
        height: 80,
        width: 164,
        borderRadius: 28,
        backgroundColor: '#00A86B',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10
    },
    expensesContainer: {
        flexDirection: 'row',
        height: 80,
        width: 164,
        borderRadius: 28,
        backgroundColor: '#FD3C4A',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10

    },
    iconContainer: {
        flexDirection: 'column',
        height: 48,
        width: 48,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconImageUp: {
        height: 10,
        width: 11
    },
    iconImageDown: {
        height: 16,
        width: 24
    },
    buttonText: {
        fontSize: 17,
        color: 'white'
    },
    timeContainer: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 16,
        height: 34,
        marginTop: 30,
        marginHorizontal: 7,
        flexDirection: 'column',
    },
    itemContainer: {
        height: 34,
        justifyContent: 'center',
        borderRadius: 16,
        paddingVertical: 8,
        paddingHorizontal: 24
    },
    selectedItem: {
        backgroundColor: 'black',
    },
    transactionHeadingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 15
    },
    transactionHeadingText: {
        fontSize: 14,
        fontFamily: 'Inter'
    },
    transactionsContainer: {
        marginTop: 10,
        flexDirection: 'column',
        rowGap: 18,
    },
    singleTransactionContainer: {
        height: 54,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#c1b7b7',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
        columnGap: 10
    },
    transactionArrowImageContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        backgroundColor: '#FFF6E5',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    transactionArrowImage: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        transform: [{ rotate: '180deg' }]
    }
});

export default HomeScreen;