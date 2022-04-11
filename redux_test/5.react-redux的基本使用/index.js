import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import store from './redux/store'

ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root'))
	// 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染APP组件
	store.subscribe(()=>{
		ReactDOM.render(
			<BrowserRouter>
				<App/>
			</BrowserRouter>,
			document.getElementById('root'))
	})