/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-7-11
 * @author 个人官网: www.051z.cc
 */
import React, { PureComponent } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native'

let count = 0;
class GroupPurchaseCell extends PureComponent {

    render() {
        let { info } = this.props
        let imageUrl = info.imageUrl.replace('w.h', '160.0')
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>
                <Image source={{ uri: imageUrl }} style={styles.icon} />

                <View style={styles.rightContainer}>
                    <Text>{info.title}</Text>
                    <View>
                    </View>
                    <Text style={{ marginTop: 8 }}>{info.subtitle}</Text>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Text style={styles.price}>{info.price}元</Text>
                    </View>

                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1 / PixelRatio,
        borderColor: COLORS.border,
        backgroundColor: 'white',
    },
    icon: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 10,
    },
    price: {
        color: '#06C1AE'
    }
});

export default GroupPurchaseCell;
