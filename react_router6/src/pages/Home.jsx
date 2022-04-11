import React, { useState } from 'react'
import { NavLink,Outlet ,useOutlet} from 'react-router-dom'

export default function Home() {
  console.log('###',useOutlet());
  const [sum, setSum] = useState(1)
  return (
    <div>
      <h2>Home组件内容</h2>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="message">Message</NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet/>
      </div>
    </div>
  )
}
