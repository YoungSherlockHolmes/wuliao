/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-16
 * @author 个人官网: www.051z.cc
 */
import React, { Component } from 'react';
import {
  View,
  Platform,
  BackHandler,
  AppNavigator,
  StatusBar
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';
import './common/Global';//入口处初始化全局变量

import Toast from '@remobile/react-native-toast';
import SplashScreen from 'react-native-splash-screen'

import MainContainer from './container/mainContainer';//主页
import Land from './pages/land';//登陆页
import GuidePage from './pages/guidePage';//欢迎页

let lastClickTime = 0;

class Roots extends Component {
  constructor(props) {
    super(props);
    this.onBackAndroid = this.onBackAndroid.bind(this);
    this.onExitApp = this.onExitApp.bind(this);
  }

  componentDidMount() {
    //入口处初始化本地数据
    // store.save('TrainIndex', {

    // })
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid() {
    let now = new Date().getTime();
    if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次退出应用程序
      return false;
    }
    lastClickTime = now;
    Toast.showShortBottom('再按一次将退出无聊APP!');
    return true;
  }

  onExitApp() {
    BackHandler.exitApp();
  }

}


// 入口处控制将要渲染的页面
const Root = StackNavigator({
  Guide: {
    screen: GuidePage,
    navigationOptions: () => ({
      header: null
    }),
  },
  Main: {
    screen: MainContainer,
    navigationOptions: () => ({
      header: null
    }),
  },
  Land: {
    screen: Land,
    navigationOptions: () => ({
      header: null
    }),
  },
}, {
    initialRouteName: 'Guide'
  }
);

export default Root;
