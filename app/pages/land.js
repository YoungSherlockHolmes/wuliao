/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-7-7
 * @author 个人官网: www.051z.cc
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar
} from 'react-native';
const BOX_INPUT = (Platform.OS === 'ios' ? 9 : 2);
import Switch from 'react-native-switch-pro';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/EvilIcons';

class Land extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            values: true,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor="#fff"
                    barStyle="light-content"
                    hidden={false}//不知道为毛一定要加这个，不加状态栏就会因为上一个页面隐藏而继承属性
                    />
                <Image style={styles.view_img} source={require('../image/land_bg.png')}>

                    <View style={styles.box}>
                        <View style={styles.box_logo}>
                            <Image style={styles.box_logo_img} source={require('../image/land_lg.png')} />
                        </View>
                        <View style={styles.box_ul}>
                            <View style={styles.box_li}>
                                <Icon name="ios-person-outline" size={24} color="#ACC8D6" style={styles.box_li_icon} />
                                <TextInput
                                    style={styles.box_input}
                                    placeholder="用户名/邮箱/手机号"
                                    placeholderTextColor="#969494"
                                    underlineColorAndroid="transparent"  //文本框的下划线颜色，透明为transparent
                                    numberOfLines={1}   //设置输入框的行数
                                    multiline={false}
                                    autoFocus={false} //自动获取input框焦点
                                    onChangeText={(text) => {
                                        this.setState({
                                            mobile: text
                                        });
                                    } }
                                    />
                            </View>
                            <View style={[styles.box_li, { marginBottom: 17 }]}>
                                <Icon name="ios-unlock-outline" size={24} color="#ACC8D6" style={styles.box_li_icon} />
                                <TextInput
                                    style={styles.box_input}
                                    placeholder="密码"
                                    placeholderTextColor="#969494"
                                    underlineColorAndroid="transparent"
                                    numberOfLines={1}
                                    multiline={false} //设置输入框的行数。当multiline设置为true时使用它，可以占据对应的行数
                                    secureTextEntry={true} //为true，文本框会遮住之前输入的文字，这样类似密码之类的敏感文字可以更加安全
                                    onChangeText={(text) => {
                                        this.setState({ password: text })
                                    } }
                                    />
                            </View>
                            <View style={styles.fast_registration}>
                                <View style={styles.fast_registration_lf}>
                                    <Switch
                                        width={37}
                                        height={23}
                                        backgroundActive={'#009DEF'}
                                        backgroundInactive={'#EDEDED'}
                                        value={this.state.values}
                                        onSyncPress={value => this.setState({ values: value })}
                                        />
                                    <TouchableOpacity
                                        activeOpacity={0.75}
                                        >
                                        <Text style={styles.fast_registration_tx}>记住密码</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity
                                    activeOpacity={0.75}
                                    style={styles.forget}
                                    >
                                    <Text style={styles.forget_tx}>忘记密码?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={() => this.props.navigation.navigate('Main')}
                            style={styles.box_dengl}
                            >
                            <View style={styles.box_dengl_bt}>
                                <Text style={styles.tx_color}>立即登录</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            style={styles.theBottomBar}
                            >
                            <View style={styles.theBottomBar_V}>
                                <Text style={styles.theBottomBar_tx}>还未注册过账号  立即注册</Text>
                                <Icons name="arrow-right" size={20} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}
let MiddleWidth = SCREEN_WIDTH - 60;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view_img: {
        flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT,
    },
    box: {
        marginLeft: 30, width: MiddleWidth
    },
    box_logo: { width: MiddleWidth, alignItems: 'center', justifyContent: 'center', marginTop: 57 },
    box_logo_img: { width: 116, height: 116, },
    box_ul: {
        marginTop: 95
    },
    box_li: {
        flexDirection: 'row', height: 45, alignItems: 'center', marginBottom: 42,
        backgroundColor: 'white', borderRadius: 25,
    },
    box_li_icon: {
        position: 'absolute', right: 17, top: 10
    },
    box_input: {
        marginLeft: 8, height: 40, fontSize: FONT_SIZE(14), textAlign: 'left',
        textAlignVertical: 'center', flex: 1, marginTop: BOX_INPUT
    },
    box_dengl: { justifyContent: 'center', marginTop: 15, alignItems: 'center' },
    box_dengl_bt: {
        width: MiddleWidth, height: 45, justifyContent: 'center',
        alignItems: 'center', backgroundColor: '#009DEF', borderRadius: 25,
    },
    tx_color: { color: 'white', fontSize: FONT_SIZE(14), },
    fast_registration: {
        marginBottom: 40,
        width: MiddleWidth, position: 'relative',
    },
    fast_registration_lf: {
        position: 'absolute', left: 0, flexDirection: 'row', justifyContent: 'center', height: 25
    },
    fast_registration_tx: {
        fontSize: FONT_SIZE(12), color: 'white',
        paddingLeft: 10
    },
    forget: { position: 'absolute', right: 0 },
    forget_tx: { fontSize: FONT_SIZE(12), color: 'white', paddingRight: 10 },
    theBottomBar: {
        marginTop: 18, width: SCREEN_WIDTH - 60, alignItems: 'center'
    },
    theBottomBar_V: {
        flexDirection: 'row',
    },
    theBottomBar_tx: {
        fontSize: FONT_SIZE(12), color: 'white',
    }
});

export default Land;