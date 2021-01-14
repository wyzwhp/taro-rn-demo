/**
 * 适当封装 Redux，简化调用
 */
import { fetch } from './request';
import { reqParams, reqConfig, nextAction } from '../typings/request'

export function createAction(params: reqParams, next?: nextAction, config?: reqConfig) {
    return (dispatch: any) => {
        return fetch(params, config).then((res) => {
            if (next) {
                if (next.type) {
                    dispatch({ type: next.type, payload: res, params })
                }
                if ("function" == typeof (next.callback)) {
                    next.callback(res)
                }
            }
            return res
        }).catch((err: any) => {
            console.log(err,'---------')
            if (next) {
                if (next.type) {
                    dispatch({ type: next.type, payload: {groupAd:[]}, params })
                }
                if ("function" == typeof (next.callback)) {
                    next.callback(null)
                }
            }
        })
    }
}