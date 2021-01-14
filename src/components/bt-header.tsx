import React from 'react';
import { View, Button, Text } from '@tarojs/components';
import { convertPx } from '../utils/common';
import { useSelector } from 'react-redux';
import './bt-header.scss';
type NavBarProps = {
    title?: string,//标题
    isFixed?: boolean,
    statusColor?:"light"|"dark",
    color?: string,//图标和文字颜色
    leftIcon?: string,//左边按钮icon
    rightIcon?: string,//右边按钮icon
    backgroundColor?: string,//导航栏背景颜色
    shadow?: boolean,//导航栏下是否有阴影
    leftChildren?: React.PureComponent | React.Component,//左边自定义控件
    rightChildren?: React.PureComponent | React.Component,//右边自定义
    titleChildren?: React.PureComponent | React.Component,//自定义标题区域
    children?: React.PureComponent | React.Component,//子组件
}
let StatusBar: any = null;
if (process.env.TARO_ENV === 'rn') {
    StatusBar = require('expo-status-bar').StatusBar;
}

export default function (props: NavBarProps) {
    const { statusBarHeight } = useSelector(state => state.globalData.deviceInfo);
    return <View><View className='bt-navbar' style={
        { backgroundColor: props.backgroundColor ?? '#fff', paddingTop: process.env.TARO_ENV == 'rn' ? 0 : statusBarHeight }}>
        {StatusBar && <StatusBar style={props.statusColor??'dark'}></StatusBar>}
        {process.env.TARO_ENV !== 'rn' && (props.children ? (<View className="bt-navbar-con" style={{ height: convertPx(44) }}>{props.children}</View>) : (
            <View className="bt-navbar-con" style={{ height: convertPx(44) }}>
                <View className="bt-navbar-left">
                    {props.leftChildren && props.leftChildren}
                </View>
                {props.title ? (
                    <Text className="bt-navbar-con-title" style={{ color: props.color ?? '#000' }}>{props.title}</Text>
                ) : (
                        <View className="bt-navbar-title">{props.titleChildren && props.titleChildren}</View>
                    )}
                <View className="bt-navbar-right">
                    {props.rightChildren && props.rightChildren}
                </View>
            </View>
        ))}
    </View>
        {(process.env.TARO_ENV !== 'rn' && props.isFixed !== true) && <View style={{ height: convertPx(44 + statusBarHeight), backgroundColor: 'transparent' }}></View>}
    </View>
}