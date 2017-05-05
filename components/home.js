import React from 'react';

import { View, Text, StyleSheet } from 'react-native';


var styles = StyleSheet.create({
  tabContent: {
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 35
  }
});

const Home = (props) => (
  <View style={styles.tabContent}>
    <Text style={styles.tabText}>
      Home component
    </Text>
  </View>
)


export default Home;
