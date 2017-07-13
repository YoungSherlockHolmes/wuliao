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
    FlatList,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Focus from '../pages/Home/focus';//轮播
import GroupPurchaseCell from '../pages/Home/GroupPurchaseCell' //商品列表样式
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';



import {
    StackNavigator,
} from 'react-navigation';

const RECOMMEND = 'http://api.meituan.com/group/v1/recommend/homepage/city/1?__skck=40aaaf01c2fc4801b9c059efcd7aa146&__skcy=mrUZYo7999nH8WgTicdfzaGjaSQ=&__skno=51156DC4-B59A-4108-8812-AD05BF227A47&__skts=1434530933.303717&__skua=bd6b6e8eadfad15571a15c3b9ef9199a&__vhost=api.mobile.meituan.com&ci=1&client=iphone&limit=40&movieBundleVersion=100&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-06-17-14-50363&offset=0&position=39.983497,116.318042&userId=10086&userid=10086&utm_campaign=AgroupBgroupD100Fab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_gxh_82__nostrategy__leftflow___ab_pindaoshenyang__a__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_trip_yidizhoubianyou__b__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___a20141120nanning__m1__leftflow___ab_pind'

class HomePase extends React.Component {

    state: {
        discounts: Array<Object>,
        dataList: Array<Object>,
        refreshing: boolean,
    }

    constructor(props: Object) {
        super(props)

        this.state = {
            discounts: [],
            dataList: [],
            refreshing: false,
        }

        { (this: any).requestData = this.requestData.bind(this) }
        { (this: any).renderCell = this.renderCell.bind(this) }
        { (this: any).onCellSelected = this.onCellSelected.bind(this) }
        { (this: any).keyExtractor = this.keyExtractor.bind(this) }
    }

    componentDidMount() {
        this.requestData()
    }

    requestData() {
        this.setState({ refreshing: true })
        this.requestRecommend()
    }

    async requestRecommend() {
        try {
            let response = await fetch(RECOMMEND)   //获取数据
            let json = await response.json()
            let dataList = json.data.map(           //获得相关字段
                (info) => {
                    return {
                        id: info.id,
                        imageUrl: info.squareimgurl,
                        title: info.mname,
                        subtitle: `[${info.range}]${info.title}`,
                        price: info.price
                    }
                }
            )

            this.setState({
                dataList: dataList,
                refreshing: false,
            })
        } catch (error) {
            alert('错误：'+error);
            this.setState({ refreshing: false })
        }
    }

    renderCell(info: Object) {
        return (
            <GroupPurchaseCell
                info={info.item}
                onPress={this.onCellSelected}
                />
        )
    }

    onCellSelected() {
        alert("暂无详情页");
    }

    keyExtractor(item: Object, index: number) {
        return item.id
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Search_bar}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.Search_bar_lf}>
                    <Icon name="ios-qr-scanner" size={26} color="white" />
                    <Text style={styles.Search_bar_lf_tx}>扫啊扫</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={styles.style_sousuo_input}>
                        <Text>输入商家名、品类或商圈</Text>
                    </TouchableOpacity>
                    <View style={styles.Search_bar_ce}>
                        <Icons name="magnifier" size={16} color="#484B40" />
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.Search_bar_ce_rg}>
                        <Icon name="ios-mic-outline" size={22} color="#484B40" />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.Search_bar_rg}>
                    <Icon name="ios-text-outline" size={26} color="white" />
                    <Text style={styles.Search_bar_lf_tx}>消息</Text>
                </TouchableOpacity>
            </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: 150 }}>
                        <Focus />
                    </View>

                    <View style={{ marginTop: 10, }}>
                        <FlatList
                            data={this.state.dataList}
                            keyExtractor={this.keyExtractor}
                            onRefresh={this.requestData}
                            refreshing={this.state.refreshing}
                            ListHeaderComponent={this.renderHeader}
                            renderItem={this.renderCell}
                            />
                    </View>
                    <View style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
                        <Text>已加载完毕</Text>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgColor,
    },
    style_sousuo_input: {
        backgroundColor: '#f6f6f6',
        height: 30,
        marginTop: 7,
        paddingLeft: 30,
        borderColor: '#f6f6f6',
        borderWidth: 1, 
        width: SCREEN_WIDTH - 100,
        borderRadius: 15,
        justifyContent: 'center',
    },
     Search_bar: {
        height: 45, flexDirection: 'row', 
        backgroundColor: '#E13032',
    },
    Search_bar_lf: {
        width: 50, justifyContent: 'center', alignItems: 'center',
    },
    Search_bar_lf_tx: {
        color: 'white', fontSize: 10
    },
    Search_bar_ce: {
        position: 'absolute', left: 10, top: 12
    },
    Search_bar_ce_rg: {
        position: 'absolute', right: 10, top:10
    },
    Search_bar_rg: {
        width: 50, justifyContent: 'center', alignItems: 'center',
    },
});

export default HomePase; 