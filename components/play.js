import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const Play = (props) => (
  <View style={styles.tabContent}>
    <Text style={styles.tabText}>
      Play component
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

export default Play;
