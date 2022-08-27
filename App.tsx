import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { JSITemplate, greetJava, greetObjectiveC } from "react-native-jsi-template";

export default function App() {
  useEffect(() => console.log("GREETING: ", JSITemplate.greeting), []);
  useEffect(() => console.log("GREET NOARGS: ", JSITemplate.greet()));
  useEffect(() => console.log("GREET TOMAS: ", JSITemplate.greet("Tomas")));
  useEffect(() => JSITemplate.greetAsync(undefined, (err, greeting) => console.log("GREETASYNC NOARGS: ", err, greeting)));
  useEffect(() => JSITemplate.greetAsync("Tomas", (err, greeting) => console.log("GREETASYNC TOMAS: ", err, greeting)));
  useEffect(() => console.log("GREET JAVA: ", greetJava?.("Tomas")));
  useEffect(() => console.log("GREET OJECTIVEC: ", greetObjectiveC?.("Tomas")));

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
