import React from 'react';
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import Navigator from '../bt-navigator';
import { FloorTemplateProps } from '../../typings/floor';
import ImgItem from './bt-img-item';
import './bt-img-biserial.scss'
const clsName = 'floor_img_biserial'
export default function (props: FloorTemplateProps) {
    const cells = 2
    return <View className={'floor_template ' + clsName} style={{
        ...props.style,
    }}>
        
        <Text className={clsName + '_h1'}>{props.title}</Text>
        
        {/* 数据分组 */}
        {(props.contents && props.contents.length) && new Array(Math.ceil(props.contents.length / cells)).fill(0).map((_: any, index: number) => {
            return <View className={clsName + '_row'} key={index}>
                {props.contents.slice(index * cells, index * cells + cells).map((item: any, _index: number) => {
                    return <Navigator className={clsName + '_item'} key={_index} url="">
                        {React.createElement(ImgItem, {
                            ...item, imgSize: [335, 188], style: {
                                overflow: 'hidden',
                                borderRadius: Taro.pxTransform(12, 750)
                            }
                        })}
                        
                        <View className={clsName + '_text'}>
                            {/* @ts-ignore */}
                            <Text className={clsName + '_title'} numberOfLines={1}>{item.title}</Text>
                            {/* @ts-ignore */}
                            <Text className={clsName + '_subtitle'} numberOfLines={1}>{item.subtitle}</Text>
                        </View>

                    </Navigator>
                })}
            </View>
        })}
    </View >
}