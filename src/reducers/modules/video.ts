const INITIAL_STATE = {
    list: [],
    group: [{ h: 0, list: [] }, { h: 0, list: [] }],
}
import { updateStateParams } from '../../typings/request'
export default function (state: any = INITIAL_STATE, action: updateStateParams) {
    switch (action.type) {
        case 'setVideoList':
            console.log(action.payload)
            if (action.payload.items) {
                const group = action.params.data.pageNo == 1 ? [{ h: 0, list: [] }, { h: 0, list: [] }] : state.group;
                action.payload.items.forEach((item: any, index: number) => {
                    const h = item.coverUrlHeight * 351 / item.coverUrlWeight
                    if (group[0].h > group[1].h) {
                        group[1].h += h
                        group[1].list.push({ index: index + state.list.length, item: { ...item, height: h, width: 351 } })
                    } else {
                        group[0].h += h
                        group[0].list.push({ index: index + state.list.length, item: { ...item, height: h, width: 351 } })
                    }
                })
                const list = action.params.data.pageNo == 1 ? action.payload.items : state.list.concat(action.payload.items)
                return {
                    ...state,
                    list,
                    group
                }
            }
            return state;
        default:
            return state
    }
}
