import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as Progress from 'react-native-progress';

const categories = [
    { label: 'Shopping', value: 0.8, color: '#FCAC12', amount: '5120' },
    { label: 'Subscription', value: 0.2, color: '#6A00FF', amount: '1280' },
    { label: 'Food', value: 0.1, color: '#FD3C4A', amount: '532' },
    { label: 'Grocery', value: 0.1, color: '#00A86B', amount: '412' }
];

const ProgressBarComponent = ({ transactions }) => {
    return (
        <ScrollView style={styles.container}>
            {transactions.map((transaction, index) => (
                <View key={index} style={styles.progressBarContainer}>
                    <View style={styles.detailsContainer}>
                        <View style={styles.labelContainer}>
                            <View style={[styles.circle, { backgroundColor: transaction.color }]} />
                            <Text style={styles.label}>{transaction.category}</Text>
                        </View>
                        <Text style={styles.amount}>{transaction.amount}</Text>
                    </View>
                    <Progress.Bar
                        progress={parseFloat(transaction.amount.replace(/[^\d.-]/g, '')) / 10000}
                        width={Dimensions.get('window').width - 40}
                        color={transaction.color}
                        unfilledColor="#F1F1FA"
                        borderWidth={0}
                        height={12}
                        borderRadius={5}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        marginBottom: 20,
        backgroundColor: '#FFF6E5'
    },
    progressBarContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        height: 50,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: Dimensions.get('window').width - 40,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'flex-start',
        width: Dimensions.get('window').width * 0.3,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 10,
        marginTop: 6
    },
    label: {
        fontSize: 16,
        color: '#212325'
    },
    amount: {
        fontSize: 24,
        color: '#FD3C4A',
        marginLeft: 50,
        alignSelf: 'flex-end'
    }
});

export default ProgressBarComponent;
