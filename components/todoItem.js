import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

// export default function TodoItem({ item }) {
//   return (
//     <TouchableOpacity>
//       <Text>{item.text}</Text>
//     </TouchableOpacity>
//   )
// }

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
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
    borderRadius: 10
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
  }
})