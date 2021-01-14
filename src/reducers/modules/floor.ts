const INITIAL_STATE = {
    page: {},
    floorData: {
        p_index:{
            {posId: 2, posCode: "search", templateCode: "search", isAd: false, adParam: "", …}
            ,{posId: 8, posCode: "focus", templateCode: "swiper8_3", isAd: true, adParam: "group_grow_banner", …}
            ,{posId: 1, posCode: "navicon", templateCode: "icons", isAd: false, adParam: "", …}
            ,{posId: 3, posCode: "tuijian01", templateCode: "img-biserial", isAd: false, adParam: "", …}
            ,{posId: 17, posCode: "circle", templateCode: "card", isAd: false, adParam: "", …}
            ,{posId: 20, posCode: "p_index/group_hp_bt_banner", templateCode: "swiper4_1", isAd: true, adParam: "group_hp_bt_banner", …}
            6: {posId: 4, posCode: "tuijian02", templateCode: "audio-throwrow", isAd: false, adParam: "", …}
            7: {posId: 5, posCode: "story", templateCode: "img-biserial", isAd: false, adParam: "", …}
            8: {posId: 6, posCode: "daliyStory", templateCode: "audio-throwrow", isAd: false, adParam: "", …}
            9: {posId: 7, posCode: "bestMovie", templateCode: "img-single-biserial", isAd: false, adParam: "", …}
        }
    },
    vipOpacity: 0//顶部半透效果
}
import { updateStateParams } from '../../typings/request'
export default function (state: any = INITIAL_STATE, action: updateStateParams) {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                num: state.num + 1
            }

        case 'setFloor':
            const key = action.params.data.typeCode
            const page = {
                ...state.page
            }
            page[key] = action.params.data.pageNo == 1 ? action.payload : state.page[key].concat(action.payload)
            const floorData = {
                ...state.floorData
            }
            floorData[key] = action.params.data.pageNo == 1 ? new Array() : state.floorData[key]
            return {
                ...state,
                page,
                floorData
            }
        case 'setFloorContent':
            const _key = action.params.data.typeCode
            const _floorData = state.floorData[_key];
            _floorData.push(action.payload)
            return {
                ...state,
                floorData: {
                    ...state.floorData
                }
            };
        case 'setADContent':
            const _ad_key = action.params.data.typeCode;
            const _ad_floorData = state.floorData[_ad_key];
            const list: any[] = [];
            if (action.payload.groupAd.length) {
                action.payload.groupAd.forEach(item => {
                    list.push({
                        image: item.picture[0],
                        contentType: 'AD',
                        link: item.link,
                        extend: item,
                        traceId: item.traceId
                    })
                })
            }
            _ad_floorData.push({ title: '', contents: list })
            return {
                ...state,
                floorData: {
                    ...state.floorData
                }
            }
        case 'setVipOpacity':
            //设置顶部导航半透明值
            return {
                ...state,
                vipOpacity:action.payload
            }
        default:
            return state
    }
}
