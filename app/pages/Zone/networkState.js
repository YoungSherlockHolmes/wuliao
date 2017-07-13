import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    NetInfo
} from 'react-native';

export default class NetworkState extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {
            isConnected: null,
            connectionInfo: null
        };
    }

    //页面的组件渲染完毕（render）之后执行
    componentDidMount() {
        //检测网络是否连接
        NetInfo.isConnected.fetch().done((isConnected) => {
            this.setState({ isConnected });
        });

        //检测网络连接信息
        NetInfo.fetch().done((connectionInfo) => {
            this.setState({ connectionInfo });
        });

        //监听网络变化事件
        NetInfo.addEventListener('change', (networkType) => {
            this.setState({ isConnected: networkType })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    当前的网络状态：
                    {this.state.isConnected ? '网络在线' : '离线'}
                </Text>
                <Text style={styles.welcome}>
                    当前网络连接类型： {this.state.connectionInfo}
                </Text>
                <Text style={styles.welcome}>
                    当前连接网络是否计费：
                    {NetInfo.isConnectionExpensive === true ? '需要' : '不要'}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#D95457',
    },
    welcome: {
        fontSize: 16,
        textAlign: 'left',
        margin: 10
    }
});