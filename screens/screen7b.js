import { View, Text,StyleSheet ,TextInput,Image,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigation} from '@react-navigation/native'



export default function screen7b() {
    const [data , setData] = useState([]); 

    useEffect(() => {
        fetch('https://65473c6b902874dff3ac0f39.mockapi.io/jobs')
      .then(response => response.json())
      .then(json => setData(json.slice(0, 10)))
    }, [])

    const navigation = useNavigation();
    function chuyen(navigation) {
        navigation.navigate('7c')
    }

  return (

    <View style={styles.container}>
        <View style={styles.inputContainer}>
            <Image 
                style={{width : 24, height : 24, position : 'absolute', left : 70, top : 18}}
                source={require('../assets/search.png')}/>
            <TextInput style={styles.input} placeholder='Search' >
                
            </TextInput>
        </View>
        <View style={styles.flatlistContainer}>
            <FlatList style={styles.wrapper}
                data={data}
                renderItem={({item}) => {
                    return (
                        <View style={styles.item}>
                            <View style={styles.itemJob}>
                                <Image style={{width : 24, height : 24, marginLeft : 20}} source={require('../assets/check.png')}/>
                                <Text style={{fontSize : 14, fontWeight : 700, marginLeft : 20}}>{item.job}</Text>
                            </View>
                            <Image style={{width : 24, height : 24,position : 'absolute', right : 50}} source={require('../assets/pen.png')}/>
                        </View>
                    )
                }}
            />
        </View>
        <TouchableOpacity 
            onPress={() => chuyen(navigation)}        
        >
            <Image style={{width : 80, height : 80}} source={require('../assets/button-add.png')}/>
        </TouchableOpacity>
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
    flatlistContainer : {
        width : '100%',
        height : 500,
        marginTop : 20,
    },
    item : {
        width : '100%', 
        height : 50, 
        marginTop : 10, 
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
        marginTop : 20

    }, 
    wrapper : {
        width : '100%',
        height : '100%',
    },
    itemJob : {
        width : '85%', 
        height : '100%', 
        backgroundColor : '#DEE1E6', 
        borderRadius : 15, 
        flexDirection : 'row',
        alignItems : 'center',
        boxShadow: '0px 8px 17px 0px #171A1F26',
    }
})