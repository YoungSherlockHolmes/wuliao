/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-16
 * @author 个人官网: www.051z.cc
 */
import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	ToastAndroid,
	Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class PbHeader extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let titles = this.props.title;
		let rightButtom = this.props.rightButtom;
		return (
			<View style={[styles.box, this.props.bgColor ? { backgroundColor: this.props.bgColor, borderColor: 'rgba(0,0,0,0)', } : {}]}>
				<TouchableOpacity
					onPress={this.pressBack}>
					<View style={styles.iconBtn}>
						{/*自定义左侧图标*/}
						{
							this.props.customIcon ?
							<Icon name={this.props.customIcon} size={24} color="#AAAAAA"/>
							:
							<Image style={styles.iconLeft}
								source={require('../image/back.png')} />
						}

					</View>
				</TouchableOpacity >
				<View style={{ flex: 1 }} />
				<Text style={styles.titleTxt}>
					{titles}
				</Text>
				<View style={{ flex: 1 }} />
				{
					rightButtom ?
						(
							<TouchableOpacity
								onPress={this.pressShare}>
								<View style={styles.iconBtn}>
									<Image style={styles.iconRight}
										source={require('../image/bubble_share.png')} />
								</View>
							</TouchableOpacity >
						)
						:
						(<View style={styles.iconBtn} />)//不调用则默认为不显示，为了保证title文字居中，故加此
				}
			</View>
		)
	}

	//按下的是返回图标
	pressBack = () => {
		this.props.navigation.goBack();
	}

	//按下的是分享图标
	// pressShare() {
	// 	ToastAndroid.show('别急...分享晚点写...', ToastAndroid.SHORT);
	// }

	//界面跳转
	// navigate = (sceneName, params) => {
	// 	this.props.navigation.navigate(sceneName, params);
	// }
}

const styles = StyleSheet.create({
	box: {
		height: Platform.OS === 'ios' ? 64 : 44,
		paddingTop: Platform.OS === 'ios' ? 20 : 0,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
		borderBottomWidth: 0.5,
		borderColor: '#DDDDDD',
	},
	titleTxt: {
		color: '#000000',
		fontSize: FONT_SIZE(16),
	},
	iconBtn: {
		height: 50,
		width: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	iconLeft: {
		height: 20,
		width: 20,
	},
	iconRight: {
		height: 20,
		width: 20,
	},
});