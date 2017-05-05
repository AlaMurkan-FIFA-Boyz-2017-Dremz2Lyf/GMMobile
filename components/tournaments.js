import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Tournaments = (props) => (
  <View style={styles.tabContent}>
    <Text style={styles.tabText}>
      Tournaments component
    </Text>
  </View>
);

var styles = StyleSheet.create({
  tabContent: {
    alignItems: 'flex-start'
  },
  tabText: {
    margin: 50,
    fontSize: 45
  }
});

export default Tournaments;
