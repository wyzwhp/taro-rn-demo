let RN: any = null;
import React from "react";

if (process.env.TARO_ENV === 'h5' || process.env.TARO_ENV === 'rn') {
  
  RN = {
    //https://reactnavigation.org/docs/stack-navigator/
    //title: 'My home',
    // headerStyle: {
    //   backgroundColor: '#000',
    // },
    screenOptions: {
      // headerTransparent: true,

    },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // }
  }
}

export default {
  navigationBarTitleText: '家长圈',
  enablePullDownRefresh:true,
  rn: RN
}
