import { View, Text,StyleSheet ,TextInput,Image,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import {useState, useEffect} from 'react'


export default function Header({navigation, route}) {
    // const navigation = useNavigation();
    // const route = useRoute();
    const API = route.params;
    const handleGoBack = () => {
        navigation.goBack();
    }

    const [data , setData] = useState([]);
    const url = 'https://65473c6b902874dff3ac0f39.mockapi.io/jobs/'+ API.idAPI;
    console.log(url);
    useEffect(() => {
        fetch(url)
      .then(response => response.json())
      .then(json => setData(json))
    }, [])

  return (
    <View style={styles.container}>
       <View style={{flexDirection : 'row', width : '100%', height : 'fit-content'}}>
        <TouchableOpacity style={styles.goBack} onPress={handleGoBack}>
                <Image style={{width : 50, height : 50}} source={require('../assets/goBack.png')}/>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <View style={styles.avata}>
                    <Image  style={{width : 60, height : 60}} source={require('../assets/avta.png')}/>
                </View>
                <View style={styles.title}>
                    <Text style={{fontSize : 18, fontWeight : 700}}>Hi {data.name}</Text>
                    <Text style={{fontSize : 14, fontWeight : 700}}>Have agrate day a head</Text>
                </View>
            </View>
       </View>
      <View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 80,
        right : 0,
        justifyContent : 'center',
        backgroundColor : 'white',
    }, 
    titleContainer : {
        width : '90%',
        height : '100%',
        right : 0,
        flexDirection : 'row',
        alignItems : 'center',
        paddingLeft : 100,
    },
    goBack : {
        width : '10%',
        height : '100%',
        justifyContent : 'center',
    }, 
    title : {
        marginLeft : 20,
    },

})