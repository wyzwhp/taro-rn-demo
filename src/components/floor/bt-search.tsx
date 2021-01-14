import React from 'react';
import Taro from '@tarojs/taro';
import { Swiper, SwiperItem, View, Text, Image } from '@tarojs/components';
import { FloorTemplateProps } from '../../typings/floor';
import { useSelector } from 'react-redux';
import './bt-search.scss'
import { convertPx } from '../../utils/common';
export default function (props: FloorTemplateProps) {
    const info = useSelector(state => state.globalData.deviceInfo);

    const position = (Taro.getMenuButtonBoundingClientRect && process.env.TARO_ENV !== 'h5') ? Taro.getMenuButtonBoundingClientRect() : null;

    //导航部分的尺寸需要按照设备计算，所以样式尺寸单独写到style里
    return <View className='floor_template floor_search' style={{
        width: convertPx(info.windowWidth),
        height: convertPx(44),
        paddingTop: convertPx(4),
        paddingBottom: convertPx(4),
        paddingLeft: convertPx(16),
        paddingRight: position ? (position.width + 16 + info.windowWidth - position.right) : 16
    }}>
        <View className="floor_search_con" style={{
            borderRadius: convertPx(18),
            paddingLeft: convertPx(12),
            height: convertPx(36),
            paddingRight: convertPx(12),
        }}>
            <Image src={require('../../assets/images/index/icon_search.png')} style={{ width: convertPx(24), height: convertPx(24), marginRight: convertPx(8) }}></Image>
            <Swiper className="floor_search_swiper" vertical={true} autoplay={true} interval={3000} circular={true} style={{ height: convertPx(36) }}>
                {props.contents.map((item: any, index: number) => {
                    return <SwiperItem className="floor_search_item" key={index}><Text className="floor_search_text" style={{ fontSize: convertPx(14) }}>{item.title}</Text></SwiperItem>
                })}
            </Swiper>
        </View>
        {props.children}
    </View>
}