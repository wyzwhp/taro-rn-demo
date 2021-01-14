let RN: any = null;
import React from "react";

if (process.env.TARO_ENV === 'h5' || process.env.TARO_ENV === 'rn') {
  const Header = require('./index_header').default;
  RN = {
    //https://reactnavigation.org/docs/stack-navigator/
    //title: 'My home',
    // headerStyle: {
    //   backgroundColor: '#000',
    // },
    screenOptions: {
      headerTitle: (props: any) => {
        return React.createElement(Header, { ...props, style: { height: 44 } })
      }
    },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // }
  }
}

export default {
  navigationBarTitleText: '首页',
  enablePullDownRefresh: true,
  rn: RN
}
