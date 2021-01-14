let RN: any = null;
import React from "react";

if (process.env.TARO_ENV === 'h5' || process.env.TARO_ENV === 'rn') {
  const Header = require('./vip_header').default;
  RN = {
    //https://reactnavigation.org/docs/stack-navigator/
    //title: 'My home',
    // headerStyle: {
    //   backgroundColor: '#000',
    // },
    screenOptions: {
      headerTransparent: true,
      headerBackground: function () {
        return React.createElement(Header)
      }
    },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // }
  }
}

export default {
  navigationBarTitleText: '会员专享',
  enablePullDownRefresh:true,
  rn: RN
}
