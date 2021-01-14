import React, { useEffect, useState, useMemo } from "react";
import { ScrollView, View, Button, Text } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
import { getFloorList } from '../../actions/floor';
import Taro, { getCurrentInstance } from '@tarojs/taro'
import Header from '../../components/bt-header';
import './index.scss'
import Template from '../../components/floor/template';
let HeaderContent:any=null;
if (process.env.TARO_ENV !== 'rn') {
  HeaderContent = require('./index_header').default
}
export default function () {
  const pageName = 'p_index'
  const { floor, floorContent } = useSelector(state => {
    return {
      floor: state.floor.page[pageName],
      floorContent: state.floor.floorData[pageName]
    }
  })

  // const floor = useSelector(state => state.floor.page[pageName]);
  // const floorContent = useSelector(state => state.floor.floorData[pageName]);
  const dispatch = useDispatch();
  useEffect(() => {
    const instance: any = getCurrentInstance();
    instance.page.onPullDownRefresh = function () {
      console.log('PullDownRefresh')
      // Taro.startPullDownRefresh();
      setTimeout(() => { Taro.stopPullDownRefresh() }, 3000)
    }
    dispatch(getFloorList({
      params: {
        app: 'parent',
        typeCode: pageName,
        pageNo: 1,
        size: 8,
        status: 0
      }
    }))
  }, [])

  // useMemo(function () {
  //   if (!search && floorContent) {
  //     setSearch(floorContent[0])
  //     setHeader(search)
  //   }
  // }, [floorContent])


  return <View className="page_index">
    <Header>{HeaderContent&&<HeaderContent/>}</Header>
    <ScrollView scrollY={true} className="index">
      {floor && floor.slice(1).map((item: any, index: number) => {
        return <Template
          tag={item.templateCode}
          key={index + 1}
          data={floorContent[index + 1]}
        />
      })}

    </ScrollView>
  </View>
}