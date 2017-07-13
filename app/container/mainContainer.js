/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-16
 * @author 个人官网: www.051z.cc
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomePage from './homePage';
import NewsPage from './newsPage';
import VideoPage from './videoPage';
import ZonePage from './zonePage';
import PbHeader from '../common/PbHeader';//复用header
import IndexDemo from '../pages/indexDemo';
import NetworkState from '../pages/Zone/networkState';

import {
  StackNavigator, TabNavigator, TabBarBottom
} from 'react-navigation';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

let Stcolor = '#F13030';//选中状态下的颜色
let NoStcolor = '#5D5D5F';//未选中状态

const MainContainer = TabNavigator({
  HomePage: {
    screen: HomePage,
    // navigationOptions: () => TabOptions('发现', '发现', "md-home", ),
    navigationOptions: {
      tabBarLabel: '发现',
      tabBarIcon: ({tintColor, focused}) => (
        <Icon name="md-home" color={focused ? Stcolor : NoStcolor} size={24} />
      ),
      header: null
    },
  },
  NewsPage: {
    screen: NewsPage,
    navigationOptions: () => TabOptions('新闻', '新闻', "logo-reddit", ),
  },
  VideoPage: {
    screen: VideoPage,
    navigationOptions: () => TabOptions('观娱', '观娱', "logo-octocat", ),
  },
  ZonePage: {
    screen: ZonePage,
    navigationOptions: () => TabOptions('我的', '酷听中心', "ios-person", ),
  },
}, {
    tabBarComponent: TabBarBottom,
    initialRouteName: 'HomePage',
    tabBarPosition: 'bottom',// tabbar放在底部
    swipeEnabled: false,// 不能滑动切换
    animationEnabled: false,// 不要切换动画
    lazy: true,// 是否根据需要懒惰呈现标签，而不是提前，意思是在app打开的时候将底部标签栏全部加载，默认false,推荐为true 
    // showLabel: false,//不显示文字
    // showIcon: true,//显示icon
    // backBehavior：按 back 键是否跳转到第一个Tab(首页)， none 为不跳转 
    tabBarOptions: {
      activeTintColor: Stcolor,// label和icon的前景色 选中状态下
      inactiveTintColor: NoStcolor,// label和icon的前景色 未选中状态下
      // activeBackgroundColor：label和icon的背景色 活跃状态下  
      // inactiveBackgroundColor：label和icon的背景色 不活跃状态下
      style: {
        height: 50,
        borderTopWidth: 0.5,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
      },
      labelStyle: {
        fontSize: FONT_SIZE(12), // 文字大小  
      },
    },
    indicatorStyle: {// 标签指示器的样式对象（选项卡底部的行）。安卓底部会多出一条线，可以将height设置为0来暂时解决这个问题 
      height: 0,
    },
  });
//将底部和顶部导航合并封装
const TabOptions = (tabBarTitle, navTitle, Icons, ) => {
  const headerTitle = navTitle;// 设置导航栏标题，推荐
  const tabBarLabel = tabBarTitle;// 设置标签栏的title。推荐
  const tabBarIcon = (({tintColor, focused}) => {
    return (
      <Icon name={Icons} color={focused ? Stcolor : NoStcolor} size={24} />
    )
  });
  const headerTitleStyle = {
    fontSize: FONT_SIZE(18),
    color: '#000',
    alignSelf: 'center'
  };
  const headerStyle = {
    backgroundColor: 'white',
    height: 50,
    borderBottomWidth: 0.5,
    borderColor: '#DDDDDD',
  };
  const tabBarVisible = true;//是否隐藏标签栏。默认不隐藏(true) 
  return { tabBarLabel, tabBarIcon, headerTitle, headerTitleStyle, headerStyle, tabBarVisible };
};

const Mains = StackNavigator({
  // 将TabNavigator包裹在StackNavigator里面可以保证跳转页面的时候隐藏tabbar
  MainContainer: {
    screen: MainContainer,
  },
  // 将需要跳转的页面注册在这里，全局才可以跳转
  IndexDemo: {
    screen: IndexDemo,
    navigationOptions: ({navigation}) => ({
      header: (
        <PbHeader
          title="demo页面"
          //customIcon={'ios-arrow-back'}   //可自定义左边箭头类型
          navigation={navigation} />
      ),
    }),
  },
  NetworkState: {
    screen: NetworkState,
    navigationOptions: ({navigation}) => ({
      header: (
        <PbHeader
          title="网络监听"
          navigation={navigation} />
      ),
    }),
  }
}, {
    headerMode: 'screen',
    transitionConfig: () => ({  //左右滑动切换
      screenInterpolator: CardStackStyleInterpolator.forHorizontal,
    })
  });


export default Mains;