import React, { Component } from 'react'

const DetailData = [
    {id:'01',content:'你好，中国！'},
    {id:'02',content:'你好，远方的朋友！'},
    {id:'03',content:'你好，未来的自己！'},

]
export default class Detail extends Component {    
  render() {
      const {id,title} = this.props.match.params
      const findResult = DetailData.find((detailObj)=>{
        return detailObj.id === id
      })      
      console.log(this.props);
    return (
      <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
      </ul>
    )
  }
}
