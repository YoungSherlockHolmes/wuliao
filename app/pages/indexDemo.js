/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class IndexDemo extends Component {
  render() {
    const {params} = this.props.navigation.state;
    return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          1+5---{params.user}
        </Text>
        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <Button title="Go back home" onPress={() => this.props.navigation.goBack()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.bgColor,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 18
  },
});
