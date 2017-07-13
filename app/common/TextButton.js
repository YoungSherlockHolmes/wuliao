/**
 * @repo https://github.com/YoungSherlockHolmes
 * 编写日期：2017-6-16
 * 状态文字按扭
 * @author 个人官网: www.051z.cc
 */
import React, { PropTypes } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,

} from 'react-native';

const propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    containerStyle: View.propTypes.style,
    text: PropTypes.string
};

const TextButton = ({ onPress, disabled, style, text, upText, upTextStyle }) => (
    <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        activeOpacity={0.75}
        style={{alignItems:'center'}}

        >
            <Text style={upTextStyle}>
                {upText}
            </Text>
            <Text style={style}>
                {text}
            </Text>
    </TouchableOpacity>
);

TextButton.propTypes = propTypes;

TextButton.defaultProps = {
    onPress() { },
    disabled: false
};

export default TextButton;
