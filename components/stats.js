import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Stats = (props) => (
  <View style={styles.tabContent}>
    <Text style={styles.tabText}>
      Stats component
    </Text>
  </View>
);

var styles = StyleSheet.create({
  tabContent: {
    alignItems: 'flex-end'
  },
  tabText: {
    margin: 50,
    fontSize: 25
  }
});

export default Stats;
