import React from 'react';
import { View, Text, ScrollView } from '@tarojs/components';
import Navigator from '../bt-navigator';
import { FloorTemplateProps } from '../../typings/floor';
import ImgItem from './bt-img-item';
import Taro from '@tarojs/taro';
import './bt-small-img.scss'


const clsName = 'floor_small_img'
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
                    {React.createElement(ImgItem, { ...item, imgSize: [212, 212], style: { overflow: 'hidden', borderRadius: Taro.pxTransform(12, 750) } })}
                    <View className={clsName + '_text'}>
                        <Text className={clsName + '_title'}
                            /* @ts-ignore */
                            numberOfLines={2}>{item.title}</Text>
                    </View>

                </Navigator>
            })}
            <View className={clsName + '_item ' + clsName + '_item_end '}></View>
        </ScrollView>
    </View>

}