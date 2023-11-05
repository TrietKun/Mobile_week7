import { View, Text,StyleSheet,Image,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function screen7a() {
    const navigation = useNavigation();
    function chyen(navigation) {
        navigation.navigate('7b')
    }

    return (
        <View style={[styles.container, { alignItems: 'center' }]}>
            <View style={styles.logo}>
                <Image style={{width : '100%', height : '100%'}} source={require('../assets/image95.png')} />
            </View>
            <Text style={styles.title}>MANAGE YOUR <br/> TASK</Text>
            <View>
                <Image style={styles.icon} 
                source={require('../assets/thu.png')} />
                <TextInput style={{width : 300, height : 50, backgroundColor : 'white', borderRadius : 10, marginTop : 50, paddingLeft : 30}} placeholder="Ener your name" />
            </View>
            <TouchableOpacity 
            onPress={() => chyen(navigation)}
            style={{width : 300, height : 50, backgroundColor : '#00BDD6', borderRadius : 10, marginTop : 50,justifyContent : 'center', alignItems : 'center' }}>
                        <Text style={{color : 'white', fontSize : 18, fontWeight : 700, lineHeight : 36}}>Get Started</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        flex : 1,
        backgroundColor : 'pink',
        alignItems : 'center',
    },
    logo : {
        width : 270,
        height : 270,
        top : 100,
    },
    title : {
        marginTop : 150,
        fontFamily : 'Epilogue',
        fontSize : 24,
        fontWeight : 700,
        lineHeight : 36,
        letterSpacing : 0,
        textAlign : 'center',
        color : '#8353E2',
    },
    icon : {
        width : 24, 
        height : 24, 
        marginTop : 50,
        position : 'absolute',
        top : 13.5,
        left : 5,
    }
})