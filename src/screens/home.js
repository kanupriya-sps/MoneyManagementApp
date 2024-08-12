import React, { useState } from "react";
import { StyleSheet, View, Dimensions, Image, Text, ImageBackground, TouchableOpacity, FlatList } from "react-native";

const HomeScreen = ({ navigation }) => {

    const dataList = ['Today', 'Week', 'Month', 'Year'];
    const [selectedItem, setSelectedItem] = useState('Today');

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
    const transactions = [
        { id: '1', amount: '₹ 15000', type: 'Income', icon: require('../assets/icons/arrow-down.png') },
        { id: '2', amount: '₹ 6500', type: 'Food', icon: require('../assets/icons/arrow-up.png') },
        { id: '3', amount: '₹ 28000', type: 'Income', icon: require('../assets/icons/arrow-down.png') },
    ];

    const renderTransactionItem = ({ item }) => (
        <View style={styles.singleTransactionContainer}>
            <View style={[styles.transactionArrowImageContainer, { flex: 1.2 }]}>
                <Image source={item.icon} style={styles.transactionArrowImage} />
            </View>
            <Text style={{ flex: 5.5, fontSize: 22 }}>{item.amount}</Text>
            <Text style={{ flex: 2, fontSize: 15, color: '#767474' }}>{item.type}</Text>
        </View>
    );

    return (
        <View style={styles.fullScreenContainer}>
            <View style={styles.imageContainer}>
                <ImageBackground source={require('../assets/icons/home-bg.png')} style={styles.bgImage}>
                    <View style={styles.detailContainer}>
                        <View style={{ flex: 4 }}>
                            <Text style={{ fontSize: 15 }}>MONDAY 9{'\n'}NOVEMBER</Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <View style={styles.userImageContainerBorder}>
                                <View style={styles.userImageContainer}>
                                    <Image source={require('../assets/icons/logo.png')} style={styles.userImage} />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 2, paddingTop: 12 }}>
                            <Text style={{ fontSize: 15 }}>KANUPRIYA</Text>
                        </View>
                    </View>
                    <View style={styles.dividingLineContainer} />
                    <View style={styles.amountContainer}>
                        <Text style={{ fontSize: 14, color: '#91919F', alignSelf: 'center' }}>Account Balance</Text>
                        <Text style={{ fontSize: 40, color: '#black', fontWeight: 'bold', marginTop: 20 }}>9400.0</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <View style={styles.incomeContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../assets/icons/arrow-down.png')} style={{ height: 10, width: 11 }} />
                                <Image source={require('../assets/icons/income-sq.png')} style={{ height: 16, width: 24 }} />
                            </View>
                            <Text style={{ fontSize: 17, color: 'white' }}>Income{'\n'}25000</Text>
                        </View>
                        <View style={styles.expensesContainer}>
                            <View style={styles.iconContainer}>
                                <Image source={require('../assets/icons/arrow-up.png')} style={{ height: 10, width: 11 }} />
                                <Image source={require('../assets/icons/expense-sq.png')} style={{ height: 16, width: 24 }} />
                            </View>
                            <Text style={{ fontSize: 17, color: 'white' }}>Expenses{'\n'}11200</Text>
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
                <Text style={{ fontSize: 14, fontFamily: 'Inter' }}>Recent Transaction</Text>
                <TouchableOpacity onPress={() => onPressViewAll()}>
                    <Text style={{ fontSize: 14, fontFamily: 'Inter' }}>View All</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={transactions}
                renderItem={renderTransactionItem}
                keyExtractor={(item) => item.id}
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
        // backgroundColor: 'white'
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
    dividingLineContainer: {
        height: 1,
        // width: 335,
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: '#525252'
    },
    amountContainer: {
        padding: 30,
        alignSelf: 'center'
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
        //backgroundColor: 'black',
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