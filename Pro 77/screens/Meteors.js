import React, { Component } from 'react';
import { Text, View, SurfaceAreaView, TouchableOpacity } from 'react-native';

export default class MeteorScreen extends Component {
    render() {
        return (
            <View style={StyleSheet.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                
                <View style={styles.titleBar}>
                <Text style={styles.titleText}>Iss Tracker App</Text>
            </View>
            <TouchableOpacity style={styles.routeCart}>
                <Text style={styles.routeText}>
                    Iss Location
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.routeCart}>
                <Text style={styles.routeText}>
                    Meteors
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
    },

    routeCart:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backGroundColor: "yellow"
    },
    titleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"lime"
    },
    routeText:{
        fontSize:35,
        fontWeight:"bold",
        color:"blue",
        marginTop:75,
        paddingLeft:30
    },
});