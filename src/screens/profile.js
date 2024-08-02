import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const ProfileScreen = () => {
    return (
        <View style={styles.fullSreenBGContainer}>
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
                    <View style={[styles.iconContainer, {backgroundColor:'#FFE2E4'}]}>
                        <Image source={require('../assets/icons/logout.png')}/>
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
    flexContainer: {
        flex: 1,
        flexDirection: 'column',
         height: 400,
        marginTop: 280,
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