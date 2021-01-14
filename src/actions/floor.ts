import { createAction } from '../utils/redux';
import { actionParams } from '../typings/request'

//获取楼层列表
export const getFloorList = ({ params, callback }: actionParams) => {
    return (dispatch: any) => {
        return dispatch(createAction({
            url: '/cms/content/recommendPosList/h5',
            data: params
        }, {
            type: 'setFloor',
            callback: async (data) => {
                let index = 0;
                const loopCall = function (index: number, data: any[]) {
                    const floor = data[index];
                    if (floor) {
                        if (floor.isAd) {
                            dispatch(getADInfo({
                                params: {
                                    typeCode: params.typeCode,
                                    groupCode: floor.adParam,
                                },
                                callback: function () {
                                    loopCall(index + 1, data)
                                }
                            }))
                        } else {
                            dispatch(getFloorContent({
                                params: {
                                    ...params,
                                    posCode: floor.posCode
                                },
                                callback: function () {
                                    loopCall(index + 1, data)
                                }
                            }))
                        }
                    } else {
                        if (callback) {
                            callback()
                        }
                    }
                }
                loopCall(index, data)
            }
        }))
    }

}

/**
 * 获取楼层内容
 * @param param0 
 */
export const getFloorContent = ({ params, callback }: actionParams) => createAction({
    url: '/cms/content/recommendList/h5',
    data: params
}, {
    type: 'setFloorContent',
    callback
})

/**
 * 获取广告信息
 */
export const getADInfo = ({ params, callback }: actionParams) => createAction({
    url: 'https://e.hybbtree.com/ad/v1/info',
    data: {
        clientType: 1,
        schoolId: 100026655,
        osType: 'ios',
        apiVersion: 74,
        ...params
    }
}, {
    type: 'setADContent',
    callback
})
