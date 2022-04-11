import React, { Component,Fragment } from 'react'

export default class Demo extends Component {
  render() {
    return (
      <Fragment key={1}>{/*允许传key属性*/}
          {/* <> 空标签不允许传任何值*/}
          <input type='text'/>
          <input type='text'/>
          {/* </> */}
      </Fragment>
    )
  }
}
