import Taro from '@tarojs/taro';
console.log(Taro.getSystemInfoSync())
const INITIAL_STATE = {
   deviceInfo:Taro.getSystemInfoSync()
}
import { updateStateParams } from '../../typings/request'
export default function (state: any = INITIAL_STATE, action: updateStateParams) {
    switch (action.type) {
        
        default:

            return state
    }
}
