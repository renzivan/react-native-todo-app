import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>1</Text>
            <Text style={styles.box2}>2</Text>
            <Text style={styles.box3}>3</Text>
            <Text style={styles.box4}>4</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    box1: {
        backgroundColor: 'violet',
        padding: 10,
    },
    box2: {
        backgroundColor: 'gold',
        padding: 20,
    },
    box3: {
        backgroundColor: 'coral',
        padding: 30,
    },
    box4: {
        backgroundColor: 'skyblue',
        padding: 40,
    }
})