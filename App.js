import React from 'react';
import { View, Text, Image, ScrollView, TextInput,StyleSheet,Platform } from 'react-native';
import ReactTabs  from "./src/Tabs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});

const App = () => {
  return (
    <View style={[styles.container, {
      flexDirection: Platform.OS!='web'?"column":"row"
    }]}>
      <View style={{ flex: 1}}/>
      <View style={{ flex: 11}}><ReactTabs /></View>      
    </View>
  );
}

export default App;