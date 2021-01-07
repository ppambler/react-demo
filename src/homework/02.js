// 写一个 React 函数组件，要求：
// 接受 name 和 age 作为 props
// 在 div 里展示 name 和 age

import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return (
    <div>{props.name}，{props.age}</div>
  )
}

ReactDOM.render(<App name="app" age={18} />,document.querySelector('#app'))