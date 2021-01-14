import React from "react";
import ReactDOM from "react-dom";
import "./1.css";

var money = {
  amount: 10000
}

class App extends React.Component{
  constructor(){
      super()
  }
  render(){
      return (
          <div className="root">
              <div>app</div>
              <div>全局金额：{money.amount}</div>
              <FirstFather/>
              <SecondFather/>
          </div>
      )
  }
}

class FirstFather extends React.Component{
  constructor(){
      super()
      this.state = {
          money : money
      }
  }
  render(){
      return (
          <div className="papa">
              <div>大爸 {this.state.money.amount}</div>
              <Son1/>
              <Son2/>
          </div>
      )
  }
}

class SecondFather extends React.Component{
  constructor(){
      super()
      this.state = {
          money : money
      }
  }
  render(){
      return (
          <div className="papa">
              <div>二爸 {this.state.money.amount}</div>
              <Son3/>
          <Son4/>
          </div>
      )
  }
}

class Son1 extends React.Component{
  constructor(){
      super()
      this.state = {
          money : money
      }
  }
  render(){
      return (
          <div className="son">
              儿子1 {this.state.money.amount}
          </div>
      )
  }
}

class Son2 extends React.Component{
  constructor(){
      super()
      this.state = {
          money : money
      }
  }
  x(){
      money.amount -= 100
      this.setState({
          money:money
      })
  }
  render(){
      return (
          <div className="son">
              儿子2 {this.state.money.amount}
              <button className="button" onClick={()=>this.x()}>消费</button>
          </div>
      )
  }
}

class Son3 extends React.Component{
  constructor(){
      super()
      this.state = {
          money : money
      }
  }
  render(){
      return (
          <div className="son">
              儿子3 {this.state.money.amount}
          </div>
      )
  }
}

class Son4 extends React.Component{
  constructor(){
      super()
      this.state = {
          money : money
      }
  }
  render(){
      return (
          <div className="son">
              儿子4 {this.state.money.amount}
          </div>
      )
  }
}

function render(){
  ReactDOM.render(
      <App/>,
      document.querySelector('#root')
  )
}

render();