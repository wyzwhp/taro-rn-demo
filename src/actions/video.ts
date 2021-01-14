import { createAction } from '../utils/redux';
import { actionParams } from '../typings/request'
//
export const getList = ({ params, callback }: actionParams) => createAction({
    url: '/wisdom/feed/video/getShortVideoList',
    data: params
}, {
    type: 'setVideoList',
    callback
})