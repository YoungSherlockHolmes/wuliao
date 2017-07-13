/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-7-5
 * @author 个人官网: www.051z.cc
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';

import {
    StackNavigator,
    NavigationActions
} from 'react-navigation';

import ViewPager from 'react-native-viewpager';
import MainContainer from '../container/mainContainer';//主页

const BANNER_IMGS = [
    require('../image/guidePage_1.jpg'),
    require('../image/guidePage_2.jpg'),
    require('../image/guidePage_3.jpg'),
];

const GuidePage = React.createClass({
    // state: {
    //     pages: null,
    // },


    getInitialState: function () {
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        return {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS),
        };
    },
    //componentWillMount，组件即将被渲染到页面上，但是此时还没有被渲染，render之前最后一次修改状态的机会
    // componentWillMount() {
    //     setTimeout(function () {
    //         navigate('Main');
    //     }, 3000);
    // },

    render: function () {
        let { pages } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    />
                <View style={styles.wrapper}>
                    <ViewPager
                        style={this.props.style}
                        dataSource={this.state.dataSource}
                        renderPage={this._renderPage}
                        //onChangePage={this._onChangePage}
                        isLoop={true}//此处若为false，虽然可以满足业务需求，但是会出现左滑出现背景色的bug，效果不好，故设置为无限循环滚动
                        autoPlay={false}
                        />
                </View>
                {/*顶部跳转按钮*/}
                {/*<TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Land')}
                    activeOpacity={0.8}
                    style={styles.buttom}>
                    <Text style={styles.buttom_text}>
                        跳转
                    </Text>
                </TouchableOpacity>*/}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Land')} style={styles.button}>
                    <Text style={{ color: '#fff', textAlign: 'center' }}>立即体验</Text>
                </TouchableOpacity>
            </View>
        );
    },
    // _onChangePage: function (        //使用onChangePage方法回调，会出现按钮延时出现在图片背景上，效果不好，待优化，留坑
    //     page: number | string,
    // ) {
    //     alert(page);
    //     if (parseInt(page) === 2) {
    //         this.setState({
    //             pages: true
    //         });
    //     } else {
    //         this.setState({
    //             pages: false
    //         });
    //     }
    // },
    _renderPage: function (
        data: Object,
        pageID: number | string, ) {
        return (
            <Image
                source={data}//使用本地图片
                style={styles.img} />
        );
    },
});

// const restAction = NavigationActions.reset({
//   index:0,
//   actions:[
//     NavigationActions.navigate({routeName:'MainContainer'})
//   ]
// })
// const restActionss = NavigationActions.reset({
//   index:0,
//   actions:[
//     NavigationActions.navgigate({routeName:'Main'})
//   ]
// })

//调用：this.props.navigation.dispatch(restAction)


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        height: SCREEN_HEIGHT,
    },
    img: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    // buttom: {
    //     position: 'absolute', top: 20, right: 20,
    //     borderRadius: 10,
    //     borderColor: 'white', borderWidth: 1, alignItems: 'center',
    //     padding: 3,
    //     width: 40
    // },
    // buttom_text: {
    //     fontSize: 10, color: 'white'
    // },
    button: {
        backgroundColor: '#F7BC54',
        padding: 10,
        borderRadius: 25,
        width: 145,
        position: 'absolute',
        bottom: 70,
        marginLeft: (SCREEN_WIDTH - 165) / 2 + 10,
        marginRight: (SCREEN_WIDTH - 165) / 2 - 10,
    },
});

module.exports = GuidePage;
