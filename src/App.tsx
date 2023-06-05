import React from 'react'
import type { MouseEvent } from 'react'
import logo from './logo.svg'
import './App.css'

// 标签必须小写
// 标签必须闭合
// jsx必须只有一个根节点,可以使用<></>或者<React.Fragment></React.Fragment>包裹
//{{}}表示外层{}表示js,内层{}表示对象
// class => className
// style 要使用js对象(不能是字符串)而且key必须是驼峰命名
// for => htmlFor

function App() {
  const fn = (event: MouseEvent<HTMLButtonElement>, name: string) => {
    event.preventDefault() // 阻止默认行为
    // event.stopPropagation() // 阻止冒泡
    console.log('click', name)
  }

  const style = { color: 'red', backgroundColor: 'blue' }

  const flag = true

  function Hello() {
    if (flag) {
      return <p>hello world111</p>
    }
    return <p>你好111</p>
  }

  const list = [
    { username: 'Jathon', name: '陈加信' },
    { username: 'zs', name: '张三' },
    { username: 'ls', name: '李四' },
  ]

  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}

        <div>
          {list.map(user => {
            const { username, name } = user
            return <li key={username}>{name}</li>
            // {/*key必须是唯一的,而且不要使用index作为key*/}
          })}
        </div>

        <div>
          {flag && <p>hello world</p>}
          {flag ? <p>hello world</p> : <p>你好</p>}
        </div>

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>hello world</p>
        {/*<div>*/}
        {/*  <label htmlFor="input1">*/}
        {/*    <input type="text" id="input1" />*/}
        {/*  </label>*/}
        {/*</div>*/}
        <Hello></Hello>

        <div>
          <button
            onClick={event => {
              fn(event, 'Jathon')
            }}
          >
            点击
          </button>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={style}
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
