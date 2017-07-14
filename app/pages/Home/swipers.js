/*import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');

class Swipers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: {
                "uri": [
                    { imgurl: 'https://img13.360buyimg.com/da/jfs/t5575/308/4215648119/104001/4c2ab0ee/5949e860Nece99102.jpg', },
                    { imgurl: 'https://img1.360buyimg.com/da/jfs/t6307/99/1563752093/86633/5412833d/59536981N52b023fe.jpg', },
                    { imgurl: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5584/79/5196470758/139932/a1884201/595b53ddN56b7d1d0.jpg!q70.jpg', },
                    { imgurl: 'https://img12.360buyimg.com/da/jfs/t5599/172/4238994500/103343/e2fa3cc7/5949e93aN5f43ed41.jpg', },
                    { imgurl: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6427/336/1988125013/110199/4cfec2e1/595b56b9N62f0f19c.jpg!q70.jpg', },
                ]
            },
            // selectedImageIndex: 0,
            // isNeedRun: true,
        };
    }

    renderSwiper = (images) => {
        return (
            <Swiper height={150}
                autoplay={true}
                autoplayTimeout={5}
                paginationStyle={{ bottom: height / 22, padding: 5 }}
                dot={<View style={{ width: 8, height: 8, backgroundColor: 'white', borderRadius: 4, marginLeft: 3, marginRight: 3 }}></View>}
                activeDot={<View style={{ width: 8, height: 8, backgroundColor: 'orange', borderRadius: 4, marginLeft: 3, marginRight: 3 }}></View>}
                >
                {images.map((uri) => {
                    return (
                        <Image source={{ uri: uri.imgurl }} style={{ width: width, height: height / 3 }} />
                    );
                })
                }
            </Swiper>
        );
    }
    render() {
        let { images } = this.state;
        return (
            <View>
                {this.renderSwiper(images)}
            </View>
        )
    }


}
export default Swipers;*/
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
var {height, width} = Dimensions.get('window');

var BANNER_IMGS = [
  'https://img13.360buyimg.com/da/jfs/t5575/308/4215648119/104001/4c2ab0ee/5949e860Nece99102.jpg',
  'https://img1.360buyimg.com/da/jfs/t6307/99/1563752093/86633/5412833d/59536981N52b023fe.jpg',
  'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5584/79/5196470758/139932/a1884201/595b53ddN56b7d1d0.jpg!q70.jpg',
  'https://img12.360buyimg.com/da/jfs/t5599/172/4238994500/103343/e2fa3cc7/5949e93aN5f43ed41.jpg',
  'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6604/74/1661535195/57311/7fcd6303/5954b8e7N70577def.jpg!q70.jpg',
];

var styles = StyleSheet.create({
    wrapper: {
        height: 180,
    },
    slide: {
        width: width,
        height: 180,
    },
    img: {
        width: width,
        height: 180,
    },
    dots: {
        backgroundColor: '#CBCBCB', width: 8, height: 8, borderRadius: 4,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3
    },
    activeDots: {
        backgroundColor: '#747474', width: 8, height: 8, borderRadius: 4,
        marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3, borderColor: 'white', borderWidth: 0.5
    },
})
class Swipers extends Component {
    render() {
        return (
            <Swiper style={styles.wrapper}
                height={150}
                autoplay={true}
                autoplayTimeout={3}//切换时间
                paginationStyle={{ position: 'absolute',bottom: 5,}}//小圆点盒子定位
                dot={<View style={styles.dots} />}  //未选中状态
                activeDot={<View style={styles.activeDots} />}  //选中状态
                >
                <View style={styles.slide}>
                    <Image source={{uri:BANNER_IMGS[0]}} style={styles.img} />
                </View>
                <View style={styles.slide}>
                    <Image source={{uri:BANNER_IMGS[1]}} style={styles.img} />
                </View>
                <View style={styles.slide}>
                    <Image source={{uri:BANNER_IMGS[2]}} style={styles.img} />
                </View>
                <View style={styles.slide}>
                    <Image source={{uri:BANNER_IMGS[3]}} style={styles.img} />
                </View>
                <View style={styles.slide}>
                    <Image source={{uri:BANNER_IMGS[4]}} style={styles.img} />
                </View>
            </Swiper>
        )
    }
}
export default Swipers;