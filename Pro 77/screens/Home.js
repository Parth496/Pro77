import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/icon.png')}style={styles.splash.png}
                
                <View style={styles.titleBar}>
                <Text style={styles.titleText}>Iss Tracker App</Text>
            </View>
            <TouchableOpacity>
                <Text>
                    Iss Location
                </Text>
            </TouchableOpacity>
            </View>
            
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{marginTop:Platform.OS==="android"?StatusBar.currentHeight:0},

    titleBar:{
        flex:0.15,
        justifyContent:"center",
        alignItems:"center"
    }
    backgroundImage:{
        flex:1,
        resizeMode:'cover',

    }
});