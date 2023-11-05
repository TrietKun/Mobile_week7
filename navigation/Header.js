import { View, Text ,StyleSheet,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
    }

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
                    <Text style={{fontSize : 18, fontWeight : 700}}>Hi Twinkle</Text>
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