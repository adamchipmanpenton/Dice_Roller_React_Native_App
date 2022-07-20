import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput  } from 'react-native';

export default function App() {

  const [text, onChangeText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>D20</Text>
      <TextInput
    
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      


    </View>





  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
