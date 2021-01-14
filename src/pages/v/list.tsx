import React, { useEffect, useState, useMemo } from "react";
import { View, Image, Text } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
// import { getList } from '../../actions/video';
import Taro from '@tarojs/taro'
import Navigator from '../../components/bt-navigator';
import './list.scss'
export default function () {
    const group = useSelector(state => state.video.group)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({type:'setVideoList',payload:{}})
    }, [])
    const Row = React.memo(({ index, data }: { index: number, data: any }) => {
        return <Navigator className="page_vlist_row" url={"/pages/v/detail?xh=" + index + '&id=' + data.id}>
            <Image src={data.coverUrl + '?imageMogr2/thumbnail/351x'} style={{
                width: Taro.pxTransform(data.width, 750),
                height: Taro.pxTransform(data.height, 750),
            }}></Image>
            <Text className="page_vlist_title" numberOfLines={2}>{data.docTitle}</Text>
            <View className="page_vlist_group">
                <Image src={data.headSculptureUrl} className="page_vlist_img"></Image>
                <Text className="page_vlist_user" numberOfLines={1}>{data.wisName}</Text>
                <Text className="page_vlist_num" numberOfLines={1}>{data.readNum}</Text>
            </View>
        </Navigator>
    })
    return <View className="page_vlist">
        {group.map((item: any, index: number) => {
            return <View className="page_vlist_column" key={index}>
                {item.list.map(({ item: _item, index: _index }: any) => {
                    return <Row index={_index} data={_item} key={_index}></Row>
                })}
            </View>
        })}
    </View>
}