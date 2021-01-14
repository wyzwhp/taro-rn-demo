import React, { useState } from 'react';
let Navigator: any = null
let useLinkProps: any = null
if (process.env.TARO_ENV === 'rn') {
    useLinkProps = require('@react-navigation/native').useLinkProps
    //Navigator = require('@tarojs/components').Navigator
    Navigator = require('react-native').TouchableOpacity
} else if (process.env.TARO_ENV === 'h5') {

}
else {
    Navigator = require('@tarojs/components').Navigator
}
type NavigatorProps = {
    className?: string,
    style?: any,
    url?: string,
    key?: number,
    children?: any
}
export default function (props: NavigatorProps) {
    const _props: any = { ...props };
    const [isHovered, setIsHovered] = useState(false);

    // useEffect(() => {
    if (useLinkProps) {

        _props.onPress = useLinkProps({ to: props?.url?(props?.url!=''?props?.url:'/'):"/" }).onPress
    } else if (process.env.TARO_ENV === 'h5') {
        _props.href = '#' + (props.url ?? '')
        _props.onMouseEnter = () => setIsHovered(true)
        _props.onMouseLeave = () => setIsHovered(false)
        _props.style = { ...props.style, transitionDuration: '150ms', opacity: isHovered ? 0.5 : 1 }
        return React.createElement('a', { ..._props })
    }

    // }, [])
    return Navigator && <Navigator {..._props}>{props.children}</Navigator>
}