import React from "react";
import { View, Image } from '@tarojs/components';
import './index_header.scss';
import Template from '../../components/floor/template'
export default function (props: any) {
    

    return (
        <View style={{...props.style,flexDirection:'row',justifyContent:'flex-start'}}>
            <Template
                tag="search"
                index={0}
                pageName="p_index"
                >
                <Image className="icons" src={require('../../assets/images/works.png')} ></Image>
                <Image className="icons" src={require('../../assets/images/red.gif')} ></Image>
            </Template>
            
        </View >)
}