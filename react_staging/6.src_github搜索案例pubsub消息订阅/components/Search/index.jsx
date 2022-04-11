import React, { Component } from 'react'
import PubSub from 'pubsub-js';
import axios from 'axios';

export default class Search extends Component {
    search = ()=>{
        // console.log("search组件发布消息了");
        
        //获取用户的输入（连续解构赋值+重命名）
        const {keyWordElement:{value:keyWord}} = this// [const {a:{b:data}} = obj ;console.log(data);]连续解构赋值+重命名
        //发送请求前通知List更新状态
        // this.props.updateAppState({isFirst:false,isLoading:true})
        PubSub.publish('AAA',{isFirst:false,isLoading:true})

        // 发送网络请求
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                //请求成功后通知List更新状态
                // this.props.updateAppState({isLoading:false,users:response.data.items})
                PubSub.publish('AAA',{isLoading:false,users:response.data.items})
            },
            error =>{
                //请求失败后通知App更新状态
                // this.props.updateAppState({isLoading:false,err:error.message})
                PubSub.publish('AAA',{isLoading:false,err:error.message})

            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                    <input ref={c =>this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
        </section>
        )
    }
}
