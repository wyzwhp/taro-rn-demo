import { View } from '@tarojs/components';
import React from 'react';
import { useSelector } from 'react-redux';
import { convertPx } from '../../utils/common';

export default function () {
    const opacity = useSelector(state => state.floor.vipOpacity);
    const { statusBarHeight, windowWidth } = useSelector(state => state.globalData.deviceInfo);
    return <View style={{ opacity, backgroundColor: '#fff', height: convertPx(44 + statusBarHeight), width: convertPx(windowWidth) }}></View>
}