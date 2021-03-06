import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 类式组件
//   class Demo extends Component {
//     state={
//         count:0
//     }
//     myRef = React.createRef()
//     add=()=>{
//         this.setState(state=>({count:state.count+1}))
//     }
//     unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//     show=()=>{
//         alert(this.myRef.current.value)
//     }
//     componentDidMount(){
//         this.timer = setInterval(()=>{
//             this.setState(state=>({count:state.count+1}))
//         },1000)
//     }
//     componentWillUnmount(){
//         clearInterval(this.timer)
//     }
//   render() {
//     return (
//       <div>
//           <input type='text' ref={this.myRef}/>
//           <h2>当前求和为{this.state.count}</h2>
//           <button onClick={this.add}>点我+1</button>
//           <button onClick={this.unmount}>卸载组件</button>
//           <button onClick={this.show}>点击提示数据</button>

//       </div>
//     )
//   }
// }

function Demo(){
    console.log('Demo');
    const [count,setCount] = React.useState(0)
    const myRef = React.useRef()
    // const [name,setName] = React.useState('tom')

    //相当于生命周期钩子函数，[count]代表只监测count，[]相当于componentDidMount
    React.useEffect(()=>{
        // console.log('@@@')
        let timer = setInterval(()=>{
            setCount(count=>count+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
       
    },[])

    // console.log(count,setCount);
    // 加的回调
    function add(){
        // setCount(count+1)//第一种写法
        setCount(count=> count+1)
        // console.log('你点击了加号');
    }
    // 卸载组件的回调
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    //提示输入的回调
    function show(){
        alert(myRef.current.value)
    }
    // function changeName(){
    //     setName('jack')
    // }
    return (
               <div>
                  <input type='text' ref={myRef}/>
                  <h2>当前求和为{count}</h2>
                  {/* <h2>我的名字是：{name}</h2> */}
                  <button onClick={add}>点我+1</button>
                  <button onClick={unmount}>卸载组件</button>
                  <button onClick={show}>点击提示数据</button>
                  {/* <button onClick={changeName}>点我改名</button> */}
              </div>
             )
}
export default Demo
