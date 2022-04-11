// 容器组件
// 引入count组件的UI组件
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

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
          <h1>当前求和为:{this.props.count}</h1>
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
    state=>({count:state}),
    // mapDispatchToProps的一般写法---函数
   /* dispatch =>({
        add:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        addAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time)),
    })
    */
   // mapDispatchToProps的简写---对象
   {
       add:createIncrementAction,
       jian:createDecrementAction,
       addAsync:createIncrementAsyncAction,
   }

)(Count)
