/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-16
 * 带图片按钮
 * @author 个人官网: www.051z.cc
 */
import React, { PropTypes } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

const propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    containerStyle: View.propTypes.style,
    text: PropTypes.string
};

const ImageButton = ({ onPress, disabled, style, text, imageUrl, imageStyle }) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.75}
        style={{alignItems:'center'}}
        >
        <Image
            source={imageUrl}
            style={imageStyle}
            />
        <Text style={style}>
            {text}
        </Text>
    </TouchableOpacity>
);

ImageButton.propTypes = propTypes;

ImageButton.defaultProps = {
    onPress() { },
    disabled: false
};

export default ImageButton;
