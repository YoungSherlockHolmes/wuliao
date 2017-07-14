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
    TouchableOpacity,
    TouchableHighlight,
    Image,
    TouchableNativeFeedback
} from 'react-native';

import Focus from '../pages/Home/focus';//轮播
// import Swipers from '../pages/Home/swipers';//轮播
import GroupPurchaseCell from '../pages/Home/GroupPurchaseCell' //商品列表样式
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/SimpleLineIcons';

import SplashScreen from 'react-native-splash-screen'

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
        this.requestData();
         SplashScreen.hide();
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
            alert('错误：' + error);
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

    _renderLtime() {
        return (
            <View>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: FONT_SIZE(14), fontWeight: "bold" }}>限时抢购</Text>
                        <Text style={{ fontSize: FONT_SIZE(11), color: "#aaa", marginLeft: 10 }}>距离结束</Text>
                        <Text style={styles.time}>01</Text>
                        <Text style={{ fontSize: FONT_SIZE(11), color: "#aaa" }}>:</Text>
                        <Text style={styles.time}>07</Text>
                        <Text style={{ fontSize: FONT_SIZE(11), color: "#aaa" }}>:</Text>
                        <Text style={styles.time}>10</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: FONT_SIZE(12), color: "#aaa", marginRight: 3 }}>更多</Text>
                            <Icon name="ios-arrow-forward-outline" size={FONT_SIZE(13)} color="#bbb" />
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                    >
                    <View style={styles.lTimeScrollView}>
                        {
                            [
                                "全素冒菜套餐|http://p0.meituan.net/200.0/deal/45905621795e6439c49c548cf4756d9b52998.jpg@133_0_534_534a%7C267h_267w_2e_90Q",
                                "荤素套餐|http://p0.meituan.net/200.0/deal/4949e93ca1b8583eb5c400659d8de480118324.jpg@103_0_594_594a%7C267h_267w_2e_90Q",
                                "培根餐|http://p0.meituan.net/200.0/deal/__22053259__1328886.jpg",
                                "酸汤水饺|http://p0.meituan.net/200.0/deal/56079d810dfdec91cd1c538ff7b58c07256692.jpg@256_0_1024_1024a%7C267h_267w_2e_90Q"
                            ].map((item, i) => {
                                let m = item.split("|")
                                let layout = (
                                    <View style={styles.lTimeList}>
                                        <Image source={{uri:m[1]}}
                                            style={styles.lTimeList_img}
                                            />
                                        <Text style={styles.lTimeList_text}>
                                            {m[0]}
                                        </Text>
                                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                                            <Text style={{ fontSize: FONT_SIZE(14), fontWeight: "bold", color: "#ff6000", marginRight: 2 }}>
                                                {"￥19"}
                                            </Text>
                                            <Text style={{ fontSize: FONT_SIZE(12), color: "#aaa", textDecorationLine: "line-through" }}>
                                                {"￥29"}
                                            </Text>
                                        </View>
                                    </View>
                                )
                                return iOS ? (
                                    <TouchableHighlight key={i} style={{ borderRadius: 4, marginRight: 10 }} onPress={() => { } }>{layout}</TouchableHighlight>
                                ) : (
                                        <View key={i} style={{ marginRight: 10 }}><TouchableNativeFeedback onPress={() => { } }>{layout}</TouchableNativeFeedback></View>
                                    )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        )
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
                    <View style={styles.card}>
                        {this._renderLtime()}
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
                        <Text>没有更多了~</Text>
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
        color: 'white', fontSize: FONT_SIZE(10)
    },
    Search_bar_ce: {
        position: 'absolute', left: 10, top: 12
    },
    Search_bar_ce_rg: {
        position: 'absolute', right: 10, top: 10
    },
    Search_bar_rg: {
        width: 50, justifyContent: 'center', alignItems: 'center',
    },
    lTimeScrollView:{
        flexDirection: "row", alignItems: "center", paddingTop: 15
    },
    lTimeList: {
        backgroundColor: "#fff",
        alignItems: "center"
    },
    lTimeList_img:{
        height: PX2DP(85), width: PX2DP(85), resizeMode: 'cover'
    },
    lTimeList_text:{
        fontSize: FONT_SIZE(13), color: "#333", marginVertical: 5
    },
    time: {
        paddingHorizontal: 3,
        backgroundColor: "#333",
        fontSize: FONT_SIZE(11),
        color: "#fff",
        marginHorizontal: 3
    },
    card: {
        backgroundColor: "#fff",
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 16
    },
});

export default HomePase; 