/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-16
 * @author 个人官网: www.051z.cc
 */
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';

import ViewPager from 'react-native-viewpager';

// var IMGS = [
//     require('../image/focus/051z_cc_1.jpg'),
//     require('../image/focus/051z_cc_2.jpg'),
//     require('../image/focus/051z_cc_3.jpg'),
//     require('../image/focus/051z_cc_4.jpg'),
//     require('../image/focus/051z_cc_5.jpg')
// ];
var IMGS = [
  'https://img13.360buyimg.com/da/jfs/t5575/308/4215648119/104001/4c2ab0ee/5949e860Nece99102.jpg',
  'https://img1.360buyimg.com/da/jfs/t6307/99/1563752093/86633/5412833d/59536981N52b023fe.jpg',
  'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5584/79/5196470758/139932/a1884201/595b53ddN56b7d1d0.jpg!q70.jpg',
  'https://img12.360buyimg.com/da/jfs/t5599/172/4238994500/103343/e2fa3cc7/5949e93aN5f43ed41.jpg',
  'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6604/74/1661535195/57311/7fcd6303/5954b8e7N70577def.jpg!q70.jpg',
  'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6427/336/1988125013/110199/4cfec2e1/595b56b9N62f0f19c.jpg!q70.jpg',
  'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6649/205/1693006538/180272/aa17fbd9/59561958N592173cc.jpg!q70.jpg'
];

var Focus = React.createClass({
  getInitialState: function () {
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    return {
      dataSource: dataSource.cloneWithPages(IMGS),
    };
  },

  render: function () {
    return (
      <ViewPager
        style={this.props.style}
        dataSource={this.state.dataSource}
        renderPage={this._renderPage}
        isLoop={true}
        autoPlay={true}
        />
    );
  },

  _renderPage: function (
    data: Object,
    pageID: number | string, ) {
    return (
      <Image
        //source={data}//使用本地图片
        source={{ uri: data }}
        style={styles.page} />
    );
  },
});

var styles = StyleSheet.create({
  page: {
    width: SCREEN_WIDTH,
    overflow: "hidden",
  },
});

module.exports = Focus;