import React from "react";
import ReactDOM from "react-dom";
import "./1.css";

class App extends React.Component{
  constructor(){
      super()
  }
  render(){
      return (
          <div className="root">
              <div>app</div>
              <FirstFather/>
              <SecondFather/>
          </div>
      )
  }
}

function FirstFather(props){
  return (
      <div className="papa">
          <div>大爸</div>
          <Son1/>
          <Son2/>
      </div>
  )
}

function SecondFather(props){
  return (
      <div className="papa">
          <div>二爸</div>
          <Son3/>
          <Son4/>
      </div>
  )
}

function Son1(){
  return (
      <div className="son">
          儿子1
      </div>
  )
}
function Son2(){
  return (
      <div className="son">
          儿子2
      </div>
  )
}

function Son3(){
  return (
      <div className="son">
          儿子3
      </div>
  )
}

function Son4(){
  return (
      <div className="son">
          儿子4
      </div>
  )
}

function render(){
  ReactDOM.render(
      <App/>,
      document.querySelector('#root')
  )
}

render();
