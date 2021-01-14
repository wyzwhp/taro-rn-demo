/**
 * 辅助请求参数
 */
export type reqConfig = {
    autoLogin: boolean, //是否自动登录
    showToast: boolean //是否显示提示
}
/**
 * 标准请求参数
 */
export type reqParams = {
    url: string,
    method?: 'GET' | 'POST',
    data?: any,
    header?: any
}

/**
 * Action标准参数
 */
export type actionParams = {
    params: any,//请求参数
    actionType?: string,
    callback?: any //请求回调方法
}
/**
 * Api请求后续行为
 */
export type nextAction = {
    type?: string,//行为
    callback?: any,//回调
}
/**
 * 更新state的数据结构
 */
export type updateStateParams = {
    type: string,//行为
    payload?: any,//数据
    params?: any,//请求参数
}