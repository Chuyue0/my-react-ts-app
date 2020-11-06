react学习demo，基于typescript
1.初始化： npx create-react-app my-react-ts-app
    or use: npx create-react-app my-react-ts-app --template typescript 
    or add: npm add react-router-dom (路由依赖)
        npm add react-redux redux
    or install: npm install --save redux-saga
        npm install --save prop-types    
2.添加该版本的typescript版本（该库的声明文件，如没有ts版本见2.1）
    npm install @types/react
    npm install @types/react-dom
    npm install react-router-dom @types/react-router-dom
    npm install @types/react-redux
2.1.解决方案
    根目录新建types文件夹，tsconfig.js文件"include"添加代码："typings"
3.配置typescript: npm add typescript
4.添加tsconfig.json配置文件
5.编译ts命令行：
6.扩展： .tsx

其他：
1.layout目录
  路由鉴权使用，分为普通和微信
2.Redux & React-redux
  * redux为解决各组件间的通讯功能，有公用数据时、组件嵌套层级比较深时等等；redux中的state数据是独立的。
    combineReducers
  * React-redux中提供两个概念：Provider/connect()
    <Provider></Provider>可接收参数作props使用
    connect(mapStateToProps, mapDispatchToProps)(MyComponent)
3.react-router-dom
  * Link组件
  * Route组件
  * BrowserRouter组件，由pushState和popState事件构建路由
4.redux-saga 库
  redux中间件，能访问完整的redux state，也可以dispatch redux action ，用于解决异步问题；
  ES6 Generator 解决地狱回调问题，通过yield关键字，让函数的执行流挂起；
  redux-saga/effects 中的几个关键字： fork,call,put,takeEvery,takeLatest,all
  delay
5.prop-types 库
  React在组件上的props进行类型检查，同Typescript扩展。  

参考来源1：
https://cloud.tencent.com/developer/article/1638645#:~:text=React%20%E5%92%8C%20TypeScript%20%E5%A6%82%E4%BD%95%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8%20%E5%9C%A8%E5%BC%80%E5%A7%8B%E4%B9%8B%E5%89%8D%EF%BC%8C%E8%AE%A9%E6%88%91%E4%BB%AC%E5%9B%9E%E9%A1%BE%E4%B8%80%E4%B8%8B%20React%20%E5%92%8C%20TypeScript,TypeScript%20%E6%98%AF%E4%B8%80%E4%B8%AA%20%E2%80%9C%E5%8F%AF%E7%BC%96%E8%AF%91%E4%B8%BA%E6%99%AE%E9%80%9A%20JavaScript%20%E7%9A%84%20JavaScript%20%E7%B1%BB%E5%9E%8B%E5%8C%96%E8%B6%85%E9%9B%86%E2%80%9D%20%E3%80%82

参考来源2：
https://juejin.im/post/6844903961938378759
https://www.jianshu.com/p/35742227738e (ts引入三方包，无法找到模块错误)

参考来源3：
https://www.cnblogs.com/detectiveHLH/p/10128948.html（create-react-app,router,redux）
https://www.jianshu.com/p/8954e9fb0c7e (react-router-dom ，需要看最新的版本4+使用情况，思路可以)
https://developers.weixin.qq.com/community/develop/article/doc/000c24093849b048efda403a85b413 （react-router-dom,ts,mock）
https://blog.csdn.net/sinat_17775997/article/details/103092220 (ts,react-router)
https://www.cnblogs.com/bax-life/p/8440326.html （react-redux,redux）
https://www.jianshu.com/p/6c4510e1344b 
https://www.jianshu.com/p/b17d8bec13f3 (redux-saga)