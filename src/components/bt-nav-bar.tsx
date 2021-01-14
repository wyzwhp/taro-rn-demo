import React from "react";
import { View, Button, Text } from '@tarojs/components';
import { useSelector } from 'react-redux';
import './bt-nav-bar.scss';
type NavBarProps = {
    title?: string,//标题
    hasStatusBar?: boolean,//是否包含状态栏
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
export default function (props: NavBarProps = { color: '#000', hasStatusBar: false, backgroundColor: '#fff' }) {
    const { statusBarHeight } = useSelector(state => state.globalData.deviceInfo);
    return <View className='btNavBar' style={
        {  backgroundColor: props.backgroundColor }}>
        {props.hasStatusBar && <View className="hasStatusBar" style={{height: statusBarHeight + 'px'}}></View>}
        {props.children ? (<View className="btNavBar-con" style={{height: '44px', }}>{props.children && props.children}</View>) : (
            <View className="btNavBar-con" style={{height: '44px', }}>
                <View className="btNavBar-left">
                    {props.leftChildren && props.leftChildren}
                </View>
                {props.title ? (
                    <Text className="btNavBar-title">{props.title}</Text>
                ) : (
                        <View className="btNavBar-title">{props.titleChildren && props.titleChildren}</View>
                    )}
                <View className="btNavBar-right">
                    {props.rightChildren && props.rightChildren}
                </View>
            </View>
        )}
    </View>
}