//创建“外壳”组件App。React,{Component}说明react文件有多种暴露的形式
import React,{Component} from "react";
import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";
//创建并暴露App组件,组件首字母大写，jsx也是组件
export default class App extends Component{
    render(){
        return(
            <div>
               <Hello/>
               <Welcome/>
            </div>
        )
    }

}
// //暴露App组件
// export default App;