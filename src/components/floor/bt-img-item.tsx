import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { FloorImgItemProps } from '../../typings/floor';
import './bt-img-item.scss'
export default function (props: FloorImgItemProps) {
    const [size, setSize] = useState([Taro.pxTransform(0, 750), Taro.pxTransform(0, 750)])
    useEffect(() => {
        setSize([Taro.pxTransform(props.imgSize[0], 750), Taro.pxTransform(props.imgSize[1], 750)])
    }, [])
    return <View style={{...props.style, width: size[0], height: size[1] }} className="img-item">
        <Image src={props.image} style={{ width: size[0], height: size[1] }} mode="aspectFill"></Image>
    </View> 
}