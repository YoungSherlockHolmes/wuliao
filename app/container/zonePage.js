/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-16
 * @author 个人官网: www.051z.cc
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

class ZonePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          {/**头像账号 */}
          <View style={styles.individual_account}>
            <TouchableOpacity
              activeOpacity={1}
              style={{ marginTop: 20 }}
              >
              <Image style={styles.individual_account_img} source={require('../image/logo.png')} />
              <View style={styles.Photograph}>
                <Icon name="camera" size={16} color="#272822" />
              </View>
            </TouchableOpacity>
            <View style={styles.Account_name}>
              <Image style={{ width: 43, height: 16, }} source={require('../image/icon_zone_04.png')} />
              <Text style={[styles.Account_name_tx, { paddingLeft: 5, paddingRight: 5 }]}>
                |
              </Text>
              <Text style={[styles.Account_name_tx, { paddingLeft: 5, paddingRight: 5 }]}>
                等级1
              </Text>
              <Text style={[styles.Account_name_tx, { paddingLeft: 5, paddingRight: 5 }]}>
                |
              </Text>
              <Text style={[styles.Account_name_tx, { paddingLeft: 5 }]}>
                播放0
              </Text>
            </View>
          </View>
          {/***列表 */}
          <View style={styles.list_core}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Image style={{ width: 23, height: 23, }} source={require('../image/icon_zone_01.png')} />
                  <Text style={styles.list_core_lf_tx}>本地音乐</Text>
                </View>
                <View>
                  <Text>0首</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.list_core_border}></View>
            </View>
          </View>
          <View style={styles.list_core}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Image style={{ width: 23, height: 23, }} source={require('../image/icon_zone_02.png')} />
                  <Text style={styles.list_core_lf_tx}>我喜欢的</Text>
                </View>
                <View>
                  <Text>0首</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.list_core_border}></View>
            </View>
          </View>
          <View style={styles.list_core}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Image style={{ width: 23, height: 23, }} source={require('../image/icon_zone_03.png')} />
                  <Text style={styles.list_core_lf_tx}>下载歌曲</Text>
                </View>
                <View>
                  <Text>0首</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.list_core, { marginTop: 10 }]}>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('NetworkState')}
                activeOpacity={0.75}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Icon name="bar-graph" size={23} color="#49A3F8" />
                  <Text style={styles.list_core_lf_tx}>当前网络状态</Text>
                </View>
                <View>
                  <Icon name="chevron-thin-right" size={22} color="#BFBFBC" />
                </View>
              </TouchableOpacity>
              <View style={styles.list_core_border}></View>
            </View>
            <View style={styles.list_core_abroad}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('AMapLocationDemo')}
                activeOpacity={0.75}
                style={styles.list_core_within}>
                <View style={styles.list_core_lf}>
                  <Icon name="paper-plane" size={23} color="#49A3F8" />
                  <Text style={styles.list_core_lf_tx}>定位</Text>
                </View>
                <View>
                  <Icon name="chevron-thin-right" size={22} color="#BFBFBC" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  individual_account: {
    backgroundColor: '#F50C64', height: 180, alignItems: 'center',
  },
  individual_account_img: {
    width: 80, height: 80, borderRadius: 80, borderColor: 'white', borderWidth: 3
  },
  Account_name: {
    paddingTop: 20, alignItems: 'center', flexDirection: 'row',
  },
  Account_name_tx: {
    fontSize: FONT_SIZE(14), color: 'white'
  },
  Photograph: {
    position: 'absolute', right: 0, bottom: 5, backgroundColor: 'white',
    width: 24, height: 24, borderRadius: 24, alignItems: 'center',
    justifyContent: 'center',
  },
  list_core: {
    backgroundColor: 'white', width: SCREEN_WIDTH
  },
  list_core_abroad: {
    marginLeft: 15, marginRight: 15
  },
  list_core_within: {
    paddingTop: 12, paddingBottom: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  list_core_lf: {
    flexDirection: 'row'
  },
  list_core_lf_tx: {
    fontSize: FONT_SIZE(16), color: '#272822', paddingLeft: 8
  },
  list_core_border: {
    borderBottomColor: '#BFBFBC', borderBottomWidth: 1 / PixelRatio
  },
});

export default ZonePage;