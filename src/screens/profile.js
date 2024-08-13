import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TextInput, Keyboard } from "react-native";

const ProfileScreen = ({ navigation }) => {

    const [username, setUsername] = useState("Kanupriya");
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (isEditing) {
            inputRef.current.focus(); // Focus the TextInput when editing mode is enabled
        }
    }, [isEditing]);

    const handleEditPress = () => {
        setIsEditing(true);
    };

    const handleDonePress = () => {
        Keyboard.dismiss;
        setIsEditing(false);
    };

    const handleLogoutPress = () => {
        navigation.navigate('MainScreen')
    }

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
                    <TextInput
                        ref={inputRef}
                        style={[styles.nameInput, { borderBottomWidth: isEditing ? 1 : 0 }]}
                        value={username}
                        onChangeText={setUsername}
                        editable={isEditing}
                        //autoFocus={isEditing}
                        keyboardType='default'
                        returnKeyType="done"
                        onSubmitEditing={handleDonePress}
                    />
                </View>
                <View>
                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', padding: 20 }} onPress={handleEditPress}>
                        <Image source={require('../assets/icons/edit.png')} ></Image>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.flexContainer}>
                <TouchableOpacity style={styles.flexColumns}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/icons/account.png')} />
                    </View>
                    <Text style={styles.flexColumnsText}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexColumns}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/icons/settings.png')} />
                    </View>
                    <Text style={styles.flexColumnsText}>Settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexColumns}>
                    <View style={styles.iconContainer}>
                        <Image source={require('../assets/icons/upload.png')} />
                    </View>
                    <Text style={styles.flexColumnsText}>Export Data</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.flexColumns} onPress={handleLogoutPress}>
                    <View style={[styles.iconContainer, { backgroundColor: '#FFE2E4' }]}>
                        <Image source={require('../assets/icons/logout.png')} />
                    </View>
                    <Text style={styles.flexColumnsText}>Logout</Text>
                </TouchableOpacity>
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
    nameInput: {
        fontSize: 24,
        color: '#161719',
        textAlign: 'center',

        borderBottomColor: '#AD00FF',
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