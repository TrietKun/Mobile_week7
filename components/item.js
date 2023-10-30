import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function item() {
    // const {item} = props
  return (
    <View style={styles.container}>
      <Text>{item.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 100,
        backgroundColor : 'blue',
        marginTop : 20,
    }
})