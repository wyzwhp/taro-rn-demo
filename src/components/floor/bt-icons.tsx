import React from 'react';
import { View, Text } from '@tarojs/components';
import Navigator from '../bt-navigator';
import { FloorTemplateProps } from '../../typings/floor';
import ImgItem from './bt-img-item';
import './bt-icons.scss'
const clsName = 'floor_icons'
export default function (props: FloorTemplateProps) {
    const cells = 5
    return <View className={'floor_template ' + clsName} style={{
        ...props.style,
        padding: 0
    }}>
        {/* 数据分组 */}
        {(props.contents && props.contents.length) && new Array(Math.ceil(props.contents.length / cells)).fill(0).map((_: any, index: number) => {
            return <View className={clsName + '_row'} key={index}>
                {props.contents.slice(index * cells, index * cells + cells).map((item: any, _index: number) => {
                    return <Navigator className={clsName + '_item'} key={_index} url="" style={{ flex: 1 }}>
                        {React.createElement(ImgItem, { ...item, imgSize: [96, 96] })}
                        {/* @ts-ignore */}
                        <View className={clsName + '_text'}><Text className={clsName + '_title'} numberOfLines={1}>{item.title}</Text></View>

                    </Navigator>
                })}
            </View>
        })}
    </View >
}