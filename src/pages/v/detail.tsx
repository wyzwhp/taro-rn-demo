import React, { useEffect, useState, useRef, useMemo } from "react";
import { View, Image, Text, Swiper, SwiperItem, Video } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
import Taro, { useRouter } from '@tarojs/taro'
import './detail.scss'
import { convertPx } from "../../utils/common";
import Header from '../../components/bt-header';
export default function () {
    const { params } = useRouter();

    const [currentIndex, setCurrentIndex] = useState(parseInt(params.xh ?? '0'))
    const list = useSelector(state => state.video.list)
    const { screenHeight, windowHeight, windowWidth, statusBarHeight } = useSelector(state => state.globalData.deviceInfo)
    const dispatch = useDispatch()
    const swiperChange = function ({ detail }: any) {
        console.log(detail)

        //setCurrentIndex(detail.current)
    }
    console.log('update')
    const H = process.env.TARO_ENV == "h5" ? windowHeight : screenHeight
    const Item = function ({ index, item, isCurrent }: { isCurrent: boolean, index: number, item: any }) {

        return useMemo(() => {
            console.log(isCurrent, index)
            return <SwiperItem className="page_v_detail_item" >
                <View className="page_v_detail_con" style={{
                    marginTop: convertPx(statusBarHeight),
                    height: convertPx(H - statusBarHeight)
                }}>
                    {isCurrent ?
                        <Video className="page_v_detail_media" poster={item.coverUrl} style={{
                            width: convertPx(windowWidth),
                            height: convertPx(item.coverUrlHeight * windowWidth / item.coverUrlWeight),
                        }} controls={false} autoplay={true} src={item.docUrl} 
                        showCenterPlayBtn={false}></Video> :
                        <Image className="page_v_detail_media" src={item.coverUrl} style={{
                            width: convertPx(windowWidth),
                            height: convertPx(item.coverUrlHeight * windowWidth / item.coverUrlWeight),
                        }}></Image>}
                    <View className="page_v_detail_cover"> <Text className="page_v_detail_title">{item.docTitle}</Text></View>
                </View>
            </SwiperItem>
        }, [isCurrent])
    }

    return <View className="page_v_detail">
        <Header statusColor="light" isFixed={true} backgroundColor={"rgba(255,255,255,0)"}></Header>
        <Swiper autoplay={false}
            onChange={swiperChange}
            vertical={true}
            current={parseInt(params.xh ?? '0')}
            className="page_v_detail_swiper"
            style={{ height: convertPx(H) }}
        >
            {(list && list.length) && list.map((item: any, index: number) => {
                return <Item isCurrent={currentIndex == index} key={index} index={index} item={item}></Item>
            })}
        </Swiper>
    </View>
}