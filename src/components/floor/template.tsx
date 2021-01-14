import React from 'react';
import { Text, View } from '@tarojs/components';
import search from './bt-search';
import swiper4 from './bt-swiper4-1';
import swiper8 from './bt-swiper8-3';
import icons from './bt-icons';
import card from './bt-card';
import smallImg from './bt-small-img';
import bigImg from './bt-big-img';
import imgBiserial from './bt-img-biserial';
import imgSingleBiserial from './bt-img-single-biserial';
import audioThrowrow from './bt-audio-throwrow';
const template: any = {
    search,
    'swiper4_1': swiper4,
    'swiper8_3': swiper8,
    icons,
    card,
    'small-img': smallImg,
    'big-img': bigImg,
    'img-biserial': imgBiserial,
    'audio-throwrow': audioThrowrow,
    'img-single-biserial': imgSingleBiserial
}
import './template.scss'
import { useSelector } from 'react-redux';
import { TemplateProps } from '../../typings/floor';
export default function (props: TemplateProps) {
    const data = useSelector(state => state.floor.floorData[props.pageName] && state.floor.floorData[props.pageName][props.index])
    if (typeof template[props.tag] !== "undefined") {
        if (data && data.contents?.length) {
            return React.createElement(template[props.tag], {
                ...data,
                children: props.children
            })
        }
        else {
            return null;
        }
    }
    // component doesn't exist yet
    return <View className='floor_template'><Text>The component {props.tag} has not been created yet.</Text></View>

}