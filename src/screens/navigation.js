import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from '../screens/main';
import HomeScreen from './home';
import TransactionsScreen from './transactions';
import AddTransactionScreen from './addTransaction';
import StatiticsScreen from './statitics';
import ProfileScreen from '../screens/profile';

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
                    headerShown: false
                }} />
            <Tab.Screen name="TransactionsScreen" component={TransactionsScreen}
                options={{
                    title: 'Transaction'
                }} />
            <Tab.Screen name="AddTransactionScreen" component={AddTransactionScreen}
                options={{
                    title: 'Add'
                }} />
            <Tab.Screen name="StatiticsScreen" component={StatiticsScreen}
                options={{
                    title: 'Statitics'
                }} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen}
                options={{
                    title: 'Profile'
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