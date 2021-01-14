import React from 'react';
import { View, Text, ScrollView, Image } from '@tarojs/components';
import Navigator from '../bt-navigator';
import { FloorTemplateProps } from '../../typings/floor';
import ImgItem from './bt-img-item';
import Taro from '@tarojs/taro';
import './bt-audio-throwrow.scss'


const clsName = 'floor_audio_throwrow'
export default function (props: FloorTemplateProps) {
    const cells = 3;
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
            <View className={clsName + '_row ' + clsName + '_row_begin'}></View>
            {/* 数据分组 */}
            {(props.contents && props.contents.length) && new Array(Math.ceil(props.contents.length / cells)).fill(0).map((_: any, index: number) => {
                return <View className={clsName + '_row'} key={index}>
                    {props.contents.slice(index * cells, index * cells + cells).map((item: any, index: number) => {
                        return <Navigator className={clsName + '_item'} key={index}>
                            {React.createElement(ImgItem, { ...item, imgSize: [112, 112], style: { overflow: 'hidden', borderRadius: Taro.pxTransform(12, 750) } })}
                            <View className={clsName + '_text'}>
                                <Text className={clsName + '_title'}
                                    /* @ts-ignore */
                                    numberOfLines={1}>{item.title}</Text>
                                <Text className={clsName + '_subtitle'}
                                    /* @ts-ignore */
                                    numberOfLines={1}>{item.subtitle}</Text>
                            </View>
                            <Image src={require('../../assets/images/index/play_btn.png')} className={clsName + '_btn'}></Image>
                        </Navigator>
                    })}
                </View>
            })}
            <View className={clsName + '_row ' + clsName + '_row_end '}></View>
        </ScrollView>
    </View>

}