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

import SplashScreen from 'react-native-splash-screen'

// import MainContainer from '../container/mainContainer';//主页

class GuidePage extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    // componentWillMount，组件即将被渲染到页面上，但是此时还没有被渲染，render之前最后一次修改状态的机会
    // componentWillMount() {
    //     setTimeout(function () {

    //     }, 3000);
    // }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={true}
                    />
                <View style={styles.wrapper}>
                    <Image source={require('../image/guidePage_3.jpg')} style={styles.img} />
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => this.props.navigation.navigate('Land')}
                    style={styles.button}
                    >
                    <Text style={{ color: '#fff', textAlign: 'center' }}>立即体验</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

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

export default GuidePage;

