import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as fs from "expo-file-system";
import b4a from "b4a";
import { FS, greetJava, greetObjectiveC } from "@screamingvoid/fs";

export default function App() {
  useEffect(() => {
    (async () => {
      const uri = `${fs.documentDirectory}/test.txt`;
      await fs.writeAsStringAsync(uri, "Hello, World!");
      const path = uri.slice("file://".length);
      console.log(path);
      console.log(b4a.toString(FS.read(path)));
    })();
  }, []);

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
