// 容器组件
// 引入count组件的UI组件
import CountUI from "../../components/Count";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action'

// 引入redux中最为重要的store,需要在APP.js中引入，不能直接引入
// import store  from "../../redux/store";

// 引入connect用于连接UI组件与redux
import { connect } from "react-redux";

//connect是一个函数，它调用的返回值也是函数
// const CountContainer = connect()(CountUI)

// export default CountContainer

/*a函数的返回值作为状态传递给了UI组件

  1.mapStateToProps函数返回的是一个对象
  2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
  3.mapStateToProps用于传递状态

*/
function mapStateToProps(state){
    return {count:state}
}
//b函数返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value----操作状态的方法
/*

  1.mapDispatchToProps函数返回的是一个对象
  2.返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
  3.mapDispatchToProps用于传递操作状态的方法

*/
function mapDispatchToProps(dispatch){
    return {
        add:(number)=>{
        // 通知redux执行加法
        // dispatch({type:'increment',data:number})
        dispatch(createIncrementAction(number))
    },
    jian:number=> dispatch(createDecrementAction(number)),
    addAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
    }
}
//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
