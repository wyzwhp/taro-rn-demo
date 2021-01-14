import React, { useEffect, useState, useMemo } from "react";
import { ScrollView, View, Button, Text } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
// import { getFloorList } from '../../actions/floor';
import Taro, { usePullDownRefresh, useReachBottom } from '@tarojs/taro'
import Header from '../../components/bt-header';
import './index.scss'
import Template from '../../components/floor/template';
let HeaderContent: any = null;
if (process.env.TARO_ENV !== 'rn') {
  HeaderContent = require('./index_header').default
}
export default function (props: any) {
  const pageName = 'p_index'
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const { floor } = useSelector(state => {
    return {
      floor: state.floor.page[pageName]
    }
  })

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

  //数据加载
  function loadData(page: number, callback?: any) {
    if (!loading) {
      //避免多次加载
      setPage(page)
      setLoading(true)
      //调用数据
      // dispatch(getFloorList({
      //   params: {
      //     app: 'parent',
      //     typeCode: pageName,
      //     pageNo: page,
      //     size: 8,
      //     status: 0
      //   },
      //   callback
      // }))
    }
  }


  return <View className="page_index">
    <Header>{HeaderContent && <HeaderContent />}</Header>
    <View className="index">

      {floor && floor.length > 1 && floor.slice(1).map((item: any, index: number) => {
        return <Template
          pageName={pageName}
          tag={item.templateCode}
          key={index + 1}
          index={index + 1}
        />
      })}

    </View>
  </View>
}