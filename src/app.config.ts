const Path = process.env.TARO_ENV === 'rn' ? 'http://s0.hybbtree.com/parent/static/icons/' : './assets/icons/'
export default {
  pages: [
    'pages/index/index',
    'pages/v/list',
    'pages/v/detail',
    'pages/vip/vip'
  ],
  tabBar: {
    color: '#999',
    selectedColor: '#3CC753',
    backgroundColor: '#fff',
    list: [{
      pagePath: 'pages/index/index',
      text: '首页',
      iconPath: Path + 'index.png',
      selectedIconPath: Path + 'index_s.png'
    }, {
      pagePath: 'pages/vip/vip',
      text: '班级圈',
      iconPath: Path + 'quan.png',
      selectedIconPath: Path + 'quan_s.png'
    }, {
      pagePath: 'pages/v/list',
      text: '家长圈',
      iconPath: Path + 'quan.png',
      selectedIconPath: Path + 'quan_s.png'
    }]
  },
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
    backgroundColor: '#f8f8f8',
    navigationStyle: 'custom',
    backgroundColorTop: 'red'
  }
}
