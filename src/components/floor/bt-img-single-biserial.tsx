import React from 'react';
import { View, Text } from '@tarojs/components';
import Navigator from '../bt-navigator';
import { FloorTemplateProps } from '../../typings/floor';
import ImgItem from './bt-img-item';
import Taro from '@tarojs/taro';
import './bt-img-single-biserial.scss'


const clsName = 'floor_img_single_biserial'
export default function (props: FloorTemplateProps) {
    const cells = 2;
    const big: any = props.contents[0];
    const list: any[] = props.contents.slice(1);
    function renderItem(item: any, index: number,isBig:boolean) {
        return <Navigator className={clsName + '_item'+(isBig?'_big':'')} key={index} url="">
            {React.createElement(ImgItem, {
                ...item, imgSize: isBig?[686,386]:[335, 188], style: {
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
    }
    return <View className={'floor_template ' + clsName} style={{
        ...props.style,
    }}>

        <Text className={clsName + '_h1'}>{props.title}</Text>
        {big && <View className={clsName + '_row'} >
            {renderItem(big, 0,true)}
        </View>}
        {/* 数据分组 */}
        {(list) && new Array(Math.ceil(list.length / cells)).fill(0).map((_: any, index: number) => {
            return <View className={clsName + '_row'} key={index}>
                {list.slice(index * cells, index * cells + cells).map((item: any, _index: number) => {
                    return renderItem(item, _index,false)
                })}
            </View>
        })}
    </View >
}