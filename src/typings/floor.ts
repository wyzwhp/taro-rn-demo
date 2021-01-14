export type TemplateProps = {
    tag: string,
    data?: FloorTemplateProps,
    children?: any,
    index:number,
    pageName:string
}

export type FloorTemplateProps = {
    title?: string,//标题
    contents: any[],//数据
    //className?: string,
    children?: any,
    style?: any,
    imgSize: [number, number],//图片尺寸
}

export type FloorImgItemProps = {
    title: string,
    subtitle: string,
    image: string,
    extend: any,
    imgSize: [number, number],
    style?:any
}