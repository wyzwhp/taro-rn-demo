import React, { useEffect, useState, useMemo } from "react";
import { View, Image } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
// import { getFloorList } from '../../actions/floor';
import { convertPx } from '../../utils/common';
import Taro, { usePullDownRefresh, useReachBottom, usePageScroll, useDidHide } from '@tarojs/taro'
import Header from '../../components/bt-header';

import Template from '../../components/floor/template';
//引入渐变组件
let BackImage: any = null;
if (process.env.TARO_ENV === 'rn') {
    BackImage = require('react-native-linear-gradient').default;
} else {
    BackImage = View
}
import './vip.scss'
export default function () {
    const pageName = 'p_vip'
    const floor = useSelector(state => state.floor.page[pageName]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [back, setBack] = useState(0)
    const { statusBarHeight } = useSelector(state => state.globalData.deviceInfo);
    const dispatch = useDispatch();
    useEffect(() => {
        //页面初始化
        loadData(1, () => {
            setLoading(false)
        });
    }, [])

    usePullDownRefresh(() => {
        loadData(1, () => {
            Taro.stopPullDownRefresh()
            setLoading(false)
        })
    })
    useReachBottom(() => {
        //触底加载新页
        loadData(page + 1, () => {
            setLoading(false)
        })
    })
    if (process.env.TARO_ENV != "h5") {
        usePageScroll((event: any) => {
            const value = 0
            const scrollTop = event.scrollTop - value;
            if (scrollTop) {
                if (scrollTop > (statusBarHeight + 44)) {
                    setOpacity(1);
                } else {
                    setOpacity(scrollTop / (statusBarHeight + 44));
                }
            } else {
                setOpacity(0)
            }
        })
    }
    //数据加载
    function loadData(page: number, callback?: any) {
        if (!loading) {
            //避免多次加载
            setPage(page)
            setLoading(true)
            // dispatch(getFloorList({
            //     params: {
            //         app: 'parent',
            //         typeCode: pageName,
            //         pageNo: page,
            //         size: 8,
            //         status: 0
            //     },
            //     callback
            // }))
        }
    }
    //设置透明度
    function setOpacity(value: number) {
        if (process.env.TARO_ENV == "rn") {
            dispatch({
                type: 'setVipOpacity',
                payload: value
            })
        } else {
            console.log(' setBack', value)
            setBack(value)
        }
    }

    return <View className="page_vip">
        <Header title="会员专享" isFixed={true} backgroundColor={"rgba(255,255,255," + back + ")"}></Header>
        <BackImage useAngle={true} style={{ paddingTop: convertPx(statusBarHeight) }} angle={137} locations={[0, 0.24, 1]} className="page_vip_header" colors={['#FFE5B0', '#FFE0AD', '#FFB55C']}>
            <Image src={require('../../assets/images/vip_top.png')} className="page_vip_top"></Image>
            <Image src={require('../../assets/images/vip_top_banner.png')} className="page_vip_banner"></Image>
            <View className="page_vip_header_bottom"></View>
        </BackImage>
        {floor && floor.map((item: any, index: number) => {
            return <Template
                pageName={pageName}
                tag={item.templateCode}
                key={index}
                index={index}
            />
        })}
    </View>
}