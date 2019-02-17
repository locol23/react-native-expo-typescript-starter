import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const App = () => (
  <View style={styles.container}>
    <Text>A boilerplate of React Native using Expo and TypeScript </Text>
  </View>
)
