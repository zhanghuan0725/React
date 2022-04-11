import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    state={
        hsaError:'' //用于标识子组件是否产生错误
    }
    // 当Parent的子组件出现报错的时候，会触发 getDerivedStateFromPropsError调用，并携带错误信息
   static getDerivedStateFromPropsError(error){
       
       console.log(error);
       return {hsaError:error}
   }
   componentDidCatch(){
       console.log('渲染组件时出错');
   }
  render() {
    return (
      <div>
          <h2>我是Parent组件</h2>
          {this.state.hsaError ? <h2>当前网络不稳定，稍后再试</h2> : <Child/>}
      </div>
    )
  }
}
