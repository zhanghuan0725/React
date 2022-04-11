/*
    该文件专门为count组件生成action对象
*/
// function createIncrementAction(data){
//     return {type:'increment',data}
// }
import {INCREMENT,DECREMENT} from './constant'
import store from './store'
//同步action，就是指action的值为object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})
// function createDecrementAction(data){
//     return {type:'decrement',data}
// }
export const createDecrementAction = data => ({type:DECREMENT,data})

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的
export const createIncrementAsyncAction = (data,time) =>{
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(createIncrementAction(data))
        },time)
    }
}