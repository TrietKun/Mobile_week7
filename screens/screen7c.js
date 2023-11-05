import { View, Text,StyleSheet ,Image,TextInput,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function screen7c({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={{fontWeight : 'bold', fontSize : 30, marginTop : 50}}>ADD YOUR JOB </Text>
        <View style={styles.inputContainer}>
            <Image 
                style={{width : 24, height : 24, position : 'absolute', left : 70, top : 18}}
                source={require('../assets/note.png')}/>
            <TextInput style={styles.input} placeholder='Input your job' ></TextInput>
        </View>
        <TouchableOpacity style={{width : 300, height : 50, backgroundColor : '#00BDD6', borderRadius : 10, marginTop : 50,justifyContent : 'center', alignItems : 'center' }}>
                <Text style={{color : 'white', fontSize : 18, fontWeight : 700, lineHeight : 36}}>Finish</Text>
        </TouchableOpacity>
        <View style={styles.logo}>
                <Image style={{width : '100%', height : '100%'}} source={require('../assets/image95.png')} />
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        flex : 1,
        alignItems : 'center',
        backgroundColor : 'white',
    },
    input : {
        width : '70%',
        height : 40,
        borderWidth : 1,
        borderRadius : 10,
        paddingLeft : 50,
    }, 
    inputContainer : {
        width : '100%',
        height : 60,
        justifyContent : 'center',
        alignItems : 'center',
        flexDirection : 'row',
    },
    logo : {
        width : 240,
        height : 240,
        top : 100,
    },
})