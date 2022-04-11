import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    state = {
        carName:'奔驰c63',stus:['小张','小王','小李']
    }

    changeCar=()=>{
        this.setState({carName:'迈巴赫'})
        // const obj = this.state
        // onsubmit.carName = '迈巴赫'
        // this.setState(obj)
    }
    addStu=()=>{
        const {stus} = this.state
        this.setState({stus:['小刘',...stus]})
    }
    // shouldComponentUpdate(nextProps,nextState){
    //     // console.log(this.props,this.state);//目前的props和state
    //     // console.log(nextProps,nextState);//接下来要变化的目标props，目标state
    //     return !this.state.carName === nextState.carName
    //     // if(this.state.carName === nextState.carName) return false
    //     // else return true
    // }
    
  render() {
    console.log('parent---render');
      const {carName} = this.state
    return (
      <div className='parent'>
          <h3>我是parent组件</h3>
          {this.state.stus}&nbsp;
          <span>我的车名字是:{carName}</span><br/>
          <button onClick={this.changeCar}>点我换车</button>
          <button onClick={this.addStu}>添加一个小刘</button>
          <Child carName="奥拓"/>
      </div>
    )
  }
}
class Child extends PureComponent {
    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props,this.state);//目前的props和state
    //     console.log(nextProps,nextState);//接下来要变化的目标props，目标state
    //     return !this.props.carName === nextProps.carName
    //     // if(this.props.carName === nextProps.carName) return false
    //     // else return true
    // }
    render() {
        console.log('child---render');
      return (
        <div className='child'>
            <h3>我是child组件</h3>
            <span>我接到的车是:{this.props.carName}</span>
        </div>
      )
    }
  }
