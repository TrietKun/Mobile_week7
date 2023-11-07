import { View, Text,StyleSheet ,Image,TextInput,TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation,useRoute } from '@react-navigation/native';

export default function screen7c() {

const [job , setJob] = useState([]);
const [data , setData] = useState([]);

const navigation = useNavigation();
const route = useRoute();
const API = route.params


const url = 'https://65473c6b902874dff3ac0f39.mockapi.io/jobs/'+ API.idAPI;

useEffect(() => {
    fetch(url)
  .then(response => response.json())
  .then(json => setData(json))
}, [])


console.log(data.jobs);

function them() {
    const newJob = {
        id : (length = data.jobs.length + 1),
        job : job,
    }
    data.jobs.push(newJob);
    console.log(data);
    fetch(url, {
        method : 'PUT',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            jobs : data.jobs
        })
    })
    .then(response => {
        if(response.ok) {
            return response.json()
            .then(json => setData(json))
        }
    })

    .catch(err => console.log(err))
    navigation.navigate('7b',{idAPI : 1, nameAPI : data.name,})
}

  return (
    <View style={styles.container}>
        <Text style={{fontWeight : 'bold', fontSize : 30, marginTop : 50}}>ADD YOUR JOB </Text>
        <View style={styles.inputContainer}>
            <Image 
                style={{width : 24, height : 24, position : 'absolute', left : 70, top : 18}}
                source={require('../assets/note.png')}/>
            <TextInput style={styles.input} placeholder='Input your job' 
                onChangeText={setJob}
            ></TextInput>
        </View>
        <TouchableOpacity style={{width : 300, height : 50, backgroundColor : '#00BDD6', borderRadius : 10, marginTop : 50,justifyContent : 'center', alignItems : 'center' }}
            onPress={them}
        >
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