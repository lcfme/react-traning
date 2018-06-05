# react-training

## 教程覆盖点
>
1. react基本使用  
props, state, context  

组建间通信  

父组件影响自组件 props  
子组建修改父组件state  

注意： 能被改写的一定是state  
>
2. redux react-redux redux-thunk redux-auto-save-session-after-dispatch  

如何通过react-redux进行状态管理  
如何写一个redux的middleware，源码分析 dispatch 和 applyMiddleWare， 重点是applyMiddleWare中迷人的next，和dispatch

>
3. styled-components添加样式
>
4. 高阶组件 一个组件传入另一个组件 返回一个新组件
>
5. 路由 react-router-dom react-dom-config 实现路由功能 react-async-component 实现异步加载
>
6. 代理 package.json 中配置proxy

```text
1. 基础概念
props state context 父组件影响子组建渲染 props 子组建影响父组件渲染 this.methos.bind(this) or arrow function
2. redux相关概念
state 当前状态 -> dispatch(action) -> reducer(state, action)返回新状态 -> listeners
middleware api interface {getState, dispatch}
3. 如何写一个middleware    https://www.npmjs.com/package/redux-auto-save-session-after-dispatch
({dispatch, getState}) => next => action => { //before new state; return next(action); // after new state }
next, dispatch区别
4 styled-components 替代css
5 高阶组件使代码清晰 增加复用
例：auth模块和react-redux中的connectAdvanced组件，接收一个WrappedComponent并且返会一个新组件，将provider组件在context注入的store获取到，并且在constructor和componentWillUnmount生命周期中注册redux的subscriptions，onStateChange或调中执行selector实例的run方法，将selector.props
传入WrappedComponent
6. 路由
react-router-dom react-dom-config 实现路由功能，react-async-component实现异步加载
7. 代理
package.json 中配置proxy
8. 如何与接口监护
dispatch 接受api函数，mapStateToProps mapDispatchesToProps 将redux中的数据应写到props，多个组件就可以共享数据了。

```