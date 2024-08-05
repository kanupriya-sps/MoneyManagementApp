import React from "react";
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.fullSreenBGContainer}>
            <View style={styles.userNameContainer}>
                <View style={{ flex: 1 }}>
                    <View style={styles.userImageContainerBorder}>
                        <View style={styles.userImageContainer}>
                            <Image source={require('../assets/icons/logo.png')} style={styles.userImage} />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1.5, flexDirection: 'column', alignItems: 'center' }}>
                    <Text style={{ fontSize: 14, color: '#91919F' }}>Username</Text>
                    <Text style={{ fontSize: 24, color: '#161719' }}>Kanupriya</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 20 }}>
                        <Image source={require('../assets/icons/edit.png')} ></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.flexContainer}>
                <View style={styles.flexColumns}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/icons/account.png')} />
                    </View>
                    <Text style={styles.flexColumnsText}>Account</Text>
                </View>
                <View style={styles.flexColumns}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/icons/settings.png')} />
                    </View>
                    <Text style={styles.flexColumnsText}>Settings</Text>
                </View>
                <View style={styles.flexColumns}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/icons/upload.png')} />
                    </View>
                    <Text style={styles.flexColumnsText}>Export Data</Text>
                </View>
                <View style={styles.flexColumns}>
                    <View style={[styles.iconContainer, { backgroundColor: '#FFE2E4' }]}>
                        <Image source={require('../assets/icons/logout.png')} />
                    </View>
                    <Text style={styles.flexColumnsText}>Logout</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    fullSreenBGContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#FFF6E5'
    },
    userNameContainer: {
        flexDirection: 'row',
        height: 100,
        marginTop: 60,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    userImageContainerBorder: {
        height: 82,
        width: 82,
        borderRadius: 41,
        borderWidth: 2,
        borderColor: '#AD00FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userImageContainer: {
        height: 72,
        width: 72,
        borderRadius: 36,
        alignSelf: 'center',
        overflow: 'hidden'
    },
    userImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    flexContainer: {
        flex: 1,
        flexDirection: 'column',
        height: 400,
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 260,
        borderRadius: 50
    },
    flexColumns: {
        // height: 40,
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',

    },
    flexColumnsText: {
        fontSize: 18,
        marginLeft: 20
    },
    iconContainer: {
        height: 48,
        width: 48,
        backgroundColor: '#EEE5FF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ProfileScreen;