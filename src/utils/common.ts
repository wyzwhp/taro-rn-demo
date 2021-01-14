//转换像素单位
export function convertPx(value: number | string) {
    if (typeof value == "string" && value == "") {
        value = 0;
    }
    if (process.env.TARO_ENV == 'h5') {
        return value + 'px'
    } else {
        return value
    }
}