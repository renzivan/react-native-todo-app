import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const TodoItem = ({ item, pressHandler }) => {
  return (
    // call pressHandler method prop and item.key as param
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name='delete' size={18} color='#555'/>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TodoItem

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  itemText: {
    marginLeft: 10,
  }
})