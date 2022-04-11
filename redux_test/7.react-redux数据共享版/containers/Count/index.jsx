// 容器组件
// 引入count组件的UI组件
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/actions/count'

// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

// UI组件
import React, { Component } from 'react'

//定义UI组件
class Count extends Component {
    state = {carName:'奔驰'}

    //加法
    increment=()=>{
        const {value} = this.selectNumber
        this.props.add(value*1)
        // 通知redux加value
        
    }
    // 减法
    decrement=()=>{
        const {value} = this.selectNumber
        this.props.jian(value*1)
        
    }
    // 当前求和为奇数再加
    incrementIfOdd=()=>{
        const {value} = this.selectNumber
        if(this.props.count % 2 !== 0){
          this.props.add(value*1)
        }
        
    }
    // 异步加
    incrementAsync=()=>{
        const {value} = this.selectNumber
        this.props.addAsync(value*1,500)
        
    }
  render() {
    // console.log('ui组件接收到的props是:', this.props);
    return (
      <div>
        <h2>我是Count组件,下方组件总人数为：{this.props.renshu}</h2>
          <h4>当前求和为:{this.props.count}</h4>
          <select ref={c => this.selectNumber = c}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
          <button onClick={this.incrementAsync}>异步加</button>&nbsp;


      </div>
    )
  }
}


export default connect(

    // 映射状态
    state=>({count:state.he,renshu:state.rens.length}),

    // 映射操作状态的方法
   // mapDispatchToProps的简写---对象
   {
       add:createIncrementAction,
       jian:createDecrementAction,
       addAsync:createIncrementAsyncAction,
   }

)(Count)
