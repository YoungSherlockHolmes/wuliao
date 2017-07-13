/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-16
 * @author 个人官网: www.051z.cc
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          新闻页面
        </Text>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Button
            onPress={() => this.props.navigation.navigate('IndexDemo', { user: '8+128G,售价3499' })}
            title="有种你就点我啊" />
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
    backgroundColor: '#D95457',
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