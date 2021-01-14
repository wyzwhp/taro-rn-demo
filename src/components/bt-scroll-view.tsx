import React, { useState } from "react";
import { View, ScrollView } from '@tarojs/components';
import './bt-scroll-view.scss';


type ScrollViewProps = {
    style?: Object,
    refresh?: Function,
    children?: React.PureComponent[] | React.Component[],//子组件
}
export default function (props: ScrollViewProps = {}) {
    const [splitHeight, setSplitHeight] = useState(0);
    const [canRefresh, setCanRefresh] = useState(true);
    const [touthing, setTouching] = useState(false);
    const [y, setY] = useState(0);


    const touchStart = function (e) {
        // console.log('touchStart', canRefresh)
        if (canRefresh) {
            setY(e.changedTouches[0].clientY)
            setTouching(true);
            console.log('canRefresh******', canRefresh, y)
        }
    }
    const touchMove = function (e) {
        console.log(canRefresh, y)
        if (canRefresh && y > 0 && touthing) {
            setSplitHeight(e.changedTouches[0].clientY - y);
            console.log(e.changedTouches[0].clientY, y, e.changedTouches[0].clientY - y)
        }
    }
    console.log(touthing, canRefresh, '------------')
    return <View style={props.style}><ScrollView className="scroll"
        onScrollToUpper={(e) => {
            console.log('onScrollToUpper', canRefresh, e)
            if (!canRefresh) {
                setCanRefresh(true);
                console.log('canRefresh-------', canRefresh)
            }
        }}
        onScroll={({ detail }) => {
            console.log(detail)
            if (!touthing) {
                if (detail.scrollTop > 45) {
                    if (canRefresh) {
                        setCanRefresh(false);
                        console.log('canRefresh+++++++', canRefresh)
                    }
                }else{
                    setCanRefresh(true);
                } 
            }
        }}

        onTouchStart={touchStart} onTouchMove={touchMove}
        onTouchEnd={(e) => {
            console.log(e)
            setTimeout(() => {
                if (touthing) {
                    setY(0)
                    setCanRefresh(false);
                    setTouching(false)
                    setSplitHeight(0)
                }
            }, 500);
        }} style={{ height: 100 + '%',flex: 1, flexDirection: 'column' }} scrollY={true} enableBackToTop={true}>
        <View className="refreshLoading" style={{  backgroundColor: 'gray', height: splitHeight + 'px' }}></View>
        {props.children}
    </ScrollView>
    </View>
}