import React, { Component } from 'react';
import { TabBarIOS, StyleSheet } from 'react-native';

import Stats from './stats';
import Home from './home';
import Play from './play';

import Icon from 'react-native-vector-icons/Ionicons';

class App extends Component {
  constructor() {
    super()

    this.state = {
      selectedTab: 'recents'
    }
  }

  setTab(selectedTab) {
    this.setState({selectedTab});
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon='recents'
          selected={this.state.selectedTab === 'recents'}
          onPress={() => this.setTab('recents')}>
          <Home />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='bookmarks'
          selected={this.state.selectedTab === 'bookmarks'}
          onPress={() => this.setTab('bookmarks')}>
          <Play />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon='more'
          selected={this.state.selectedTab === 'more'}
          onPress={() => this.setTab('more')}>
          <Stats />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
};

export default App;
