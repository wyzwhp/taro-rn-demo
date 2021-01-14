import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { Swiper, SwiperItem, View } from '@tarojs/components';
import { FloorTemplateProps } from '../../typings/floor';
import ImgItem from './bt-img-item';
import './bt-banner.scss'
const clsName = 'floor_banner'
export default function (props: FloorTemplateProps) {
    const [size, setSize] = useState([Taro.pxTransform(0, 750), Taro.pxTransform(0, 750)])
    useEffect(() => {
        setSize([Taro.pxTransform(props.imgSize[0], 750), Taro.pxTransform(props.imgSize[1], 750)])
    }, [])
    return <View className={'floor_template ' + clsName} style={{
        ...props.style,
    }}>
        <Swiper autoplay={true} interval={3000} circular={true} style={{
            width: size[0],
            height: size[1],
        }}>
            {props.contents.map((item: any, index: number) => {
                return <SwiperItem className={clsName + '_item'} key={index}>
                    {React.createElement(ImgItem, { ...item, imgSize: props.imgSize,style:{
                        overflow:'hidden',
                        borderRadius:Taro.pxTransform(12, 750)
                    } })}
                </SwiperItem>
            })}
        </Swiper>
    </View >
}