import React from 'react';
import Banner from './bt-banner';
import { FloorTemplateProps } from '../../typings/floor';
export default function (props: FloorTemplateProps) {
    return React.createElement(Banner, {
        ...props,
        imgSize: [686, 168],
        style:{
            backgroundColor:'#f8f8f8',
        }
    })
}