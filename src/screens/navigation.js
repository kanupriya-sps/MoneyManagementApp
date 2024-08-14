import React from 'react';
import { Image, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/main';
import HomeScreen from './home';
import TransactionsScreen from './transactions';
import AddTransactionScreen from './addTransaction';
import StatiticsScreen from './statitics';
import ProfileScreen from '../screens/profile';
import { home, transaction, plus, user, pieChart } from '../utlis/images';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="HomeScreen"
            screenOptions={{
                tabBarActiveTintColor: '#7F3DFF',
                tabBarInactiveTintColor: 'grey'
            }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={home}
                            style={{ width: 25, height: 25, tintColor: focused ? '#7F3DFF' : 'grey' }}
                        />
                    )
                }} />
            <Tab.Screen name="TransactionsScreen" component={TransactionsScreen}
                options={{
                    title: 'Transaction',
                    headerStyle: {
                        backgroundColor: '#FFF6E5',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={transaction}
                            style={{ width: 25, height: 25, tintColor: focused ? '#7F3DFF' : 'grey' }}
                        />
                    )
                }} />
            <Tab.Screen name="AddTransactionScreen" component={AddTransactionScreen}
                options={{
                    tabBarLabel: '',
                    title: 'Add Transaction',
                    headerStyle: {
                        backgroundColor: '#FFF6E5',
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={{ height: 70, width: 70, borderRadius: 35, backgroundColor: '#A89696', justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#7F3DFF', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    source={plus}
                                    style={{ width: 25, height: 25, tintColor: focused ? 'white' : 'white', alignSelf: 'center' }}
                                />
                            </View>
                        </View>
                    )
                }} />
            <Tab.Screen name="StatiticsScreen" component={StatiticsScreen}
                options={{
                    title: 'Financial Report',
                    headerStyle: {
                        backgroundColor: '#FFF6E5',
                    },
                    tabBarLabel: 'Statitics',
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={pieChart}
                            style={{ width: 25, height: 25, tintColor: focused ? '#7F3DFF' : 'grey' }}
                        />
                    )
                }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    title: 'Profile',
                    headerStyle: {
                        backgroundColor: '#FFF6E5',
                    },
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={user}
                            style={{ width: 25, height: 25, tintColor: focused ? '#7F3DFF' : 'grey' }}
                        />
                    )
                }} />
        </Tab.Navigator>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='MainScreen'>
                <Stack.Screen name="MainScreen" component={MainScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="HomeScreen" component={TabNavigator}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen name="Transactions" component={TransactionsScreen}
                    options={{
                        title: 'Transactions',
                        headerStyle: {
                            backgroundColor: '#FFF6E5',
                        },
                        headerBackTitleVisible: false
                    }} />
                <Stack.Screen name="AddTransactionScreen" component={AddTransactionScreen}
                    options={{
                        title: 'Add Transaction'
                    }} />
                <Stack.Screen name="ProfileScreen" component={ProfileScreen}
                    options={{
                        headerShown: false
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;