import React, { Component,Fragment } from 'react'
import Demo from './component/8.errorBoundary/Parent'

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Demo/>
			</Fragment>
			// <div>
			// 	<Demo />
			// </div>
		)
	}
}
