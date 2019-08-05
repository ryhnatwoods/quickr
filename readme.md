规范

1. css 命名规范，严格按照 BEM 规范命名 css
   {项目名称} - {组件名称} \_\_ {用途}/{简单描述}

关于 Taro 的生命周期函数与小程序生命周期函数之间的对应关系
一、Taro 的本身生命周期

生命周期
componentWillMount
在微信小程序中这一生命周期方法对应页面的 onLoad 或入口文件 app 中的 onLaunch

componentDidMount
在微信小程序中这一生命周期方法对应页面的 onReady 或入口文件 app 中的 onLaunch，在 componentWillMount 后执行

componentDidShow
在微信小程序中这一生命周期方法对应 onShow

componentDidHide
在微信小程序中这一生命周期方法对应 onHide

componentDidCatchError
错误监听函数，在微信小程序中这一生命周期方法对应 onError

componentDidNotFound
页面不存在监听函数，在微信小程序中这一生命周期方法对应 onPageNotFound

shouldComponentUpdate
页面是否需要更新

componentWillUpdate
页面即将更新

componentDidUpdate
页面更新完毕

componentWillUnmount
页面退出，在微信小程序中这一生命周期方法对应 onUnload

一、Taro 在微信小程序开发中特有的生命周期

1. onPullDownRefresh： 页面相关事件处理函数–监听用户下拉动作

2. onReachBottom： 页面上拉触底事件的处理函数

3. onShareAppMessage： 用户点击右上角转发

4. onPageScroll： 页面滚动触发事件的处理函数

5. onTabItemTap： 当前是 tab 页时，点击 tab 时触发

6. componentWillPreload： 预加载，只在微信小程序中可用
