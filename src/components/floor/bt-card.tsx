import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Navigator from '../bt-navigator';
import { FloorTemplateProps } from '../../typings/floor';
import ImgItem from './bt-img-item';
import Taro from '@tarojs/taro';
import './bt-card.scss'

//引入渐变组件
let BackImage: any = null;
if (process.env.TARO_ENV === 'rn') {
    BackImage = require('react-native-linear-gradient').default;
} else {
    BackImage = View
}
const clsName = 'floor_card'
export default function (props: FloorTemplateProps) {
    return <View className={'floor_template ' + clsName}>
        <Text className={clsName + '_h1'}>{props.title}</Text>
        <ScrollView scrollX={true}
            //@ts-ignore
            showsHorizontalScrollIndicator={false}
            show-scrollbar={false}
            pagingEnabled={true}
            paging-enabled={true}
            enhanced={true}
            enableFlex={true} className={clsName + '_con'} style={{
                ...props.style
            }}>
            <View className={clsName + '_item ' + clsName + '_item_begin'}></View>
            {props.contents.map((item: any, index: number) => {
                return <Navigator className={clsName + '_item'} key={index}>
                    {React.createElement(ImgItem, { ...item, imgSize: [88, 88], style: { overflow: 'hidden', borderRadius: Taro.pxTransform(44, 750) } })}
                    {/* @ts-ignore */}
                    <View className={clsName + '_text'}><Text className={clsName + '_title'} numberOfLines={1}>{item.title}</Text></View>
                    <BackImage  colors={['#4BD162', '#28BF68']} className={clsName + '_subtitle'}><Text className={clsName + '_subtitle_text'}>加入</Text></BackImage>
                </Navigator>
            })}
            <View className={clsName + '_item ' + clsName + '_item_end '}></View>
        </ScrollView>
    </View>

}