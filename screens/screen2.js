import { View, Text,StyleSheet ,Image,TextInput,FlatList} from 'react-native'
import React from 'react'
import Item from '../components/item'
export default function screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.img} 
        source={require('../assets/Frameavata.png')}/>
        <Text style ={[styles.titleHeader, {fontSize : 25}]}>Hi Twinkle</Text>
        <Text style ={styles.titleHeader}>Have agate day a head</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Search' style={styles.input}>
        </TextInput>
        <Image  style={styles.icon} source={require('../assets/search.png')}/>
      </View>
      <FlatList style={styles.flatlist}>
        data={data}
        renderItem={({item}) => <Item item={item}/>}
        numColumns={1},
        contenContainerStyle={{justifyContent : 'space-between'}}
      </FlatList>
    </View>
  )
}

const data = [
  {title : 'Buy a milk'},
  {title : 'Go to school'},
  {title : 'Cooking'},
  {title : 'Learn React Native'},
]

const styles = StyleSheet.create({
  container: {
    width : '100%',
    height : '100%',
    backgroundColor: 'pink',
    alignItems: 'center',  
  },
  headerContainer : {
    width : '100%',
    height : '10%',
    backgroundColor : 'white',
    justifyContent : 'center',
    alignItems : 'flex-end',
  },
  img : {
    width : 50,
    height : 50,
    position : 'absolute',
    right : 190,
  },
  titleHeader : {
    fontSize : 15,
    fontWeight : 'bold',
    width : '50%',
    textAlign : 'center',
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
icon : {
    width : 30,
    height : 30,
    position : 'absolute',
    left : 0,
    top : 0,
},
flatlist : {
  width : '100%',
  height : '100%',
  backgroundColor : 'red',
  marginTop : 30
}
})