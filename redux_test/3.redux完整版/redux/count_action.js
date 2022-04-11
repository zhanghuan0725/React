/*
    该文件专门为count组件生成action对象
*/
// function createIncrementAction(data){
//     return {type:'increment',data}
// }
import {INCREMENT,DECREMENT} from './constant'

export const createIncrementAction = data => ({type:INCREMENT,data})
// function createDecrementAction(data){
//     return {type:'decrement',data}
// }
export const createDecrementAction = data => ({type:DECREMENT,data})