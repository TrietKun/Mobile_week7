import { View, Text,StyleSheet,TextInput,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function screen1() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>

      </View>
      <Text style={styles.title}>MANAGE YOUR TASK</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}>
        </TextInput>
        <Image style={styles.img} source={require('../assets/Frame.png')}/>
      </View>
      <TouchableOpacity style={styles.button}>
        Get Started 
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width : '100%',
        height : '100%',
        backgroundColor: 'pink',
        alignItems: 'center',  
    },
    logo : {
        width : 200,
        height : 200,
        marginTop : '40%',
        borderColor : 'yellow',
        borderWidth : 3
    },
    title : {
        marginTop : '10%',
        fontSize : 25,
        fontWeight : 'bold',
        textAlign : 'center',
        width : '50%',
    },
    inputContainer : {
        width : '80%',
        height : 30,
        backgroundColor : 'white',
        marginTop : 30
    },
    input : {
        width : '100%',
        height : '100%',
        paddingLeft : 40,
    },
    img : {
        width : 30,
        height : 30,
        position : 'absolute',
        left : 0,
        top : 0,
    },
    button : {
        width : '80%',
        height : 50,
        backgroundColor : '#00BDD6',
        marginTop : 30,
        borderRadius : 10,
        alignItems : 'center',
        justifyContent : 'center',
        fontWeight : 'bold',
    }
})