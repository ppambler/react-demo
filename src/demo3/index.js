import React from "react"
import ReactDOM from "react-dom";
import './index.scss'
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      result1: 0,
      result2: 0
    }
    this.t0 = new Date()
  }
  success1(x){
    console.log(x)
    let r1 = new Date() - this.t0
    console.log(`兔子跑完了，用时${r1}`)
    this.setState({
      result1: r1
    })
  }
  success2(x){
    console.log(x)
    let r2 = new Date() - this.t0
    console.log(`乌龟跑完了，用时${r2}`)
    this.setState({
      result2: r2
    })
  }
  render(){
    return (
    <div>
      <div className="header">
        <Time1 result={this.state.result1}/>
        <Time2 result={this.state.result2}/>
       </div>
       <Playground success1={this.success1.bind(this)}
                   success2={this.success2.bind(this)}/>
    </div>
    )
  }
}

function Time1(props){
  return (
  <div>
    <h2>🐇用时</h2>
    <div>{props.result}</div>
  </div>
  )
}
function Time2(props){
  return (
  <div>
    <h2> 🐢用时</h2>
    <div>{props.result}</div>
  </div>
  )
}
function Judge(){
  return (
    <div>裁判</div>
  )
}

function Playground(props){
  let success1 = props.success1
  let success2 = props.success2
  return (
    <div className="playground">
       <Track1 success={success1} />
       <Track2 success={success2}/>
    </div>
  )
}



class Track1 extends React.Component{
  constructor(){
    super()
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerId = setInterval(()=>{
      n+=25
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if(n>=100){
        window.clearInterval(timerId)
        this.props.success('我是小兔兔')
      }
    },1000)
  }

  render(){
    return (
      <div>
        <div className="player" style={this.state.style}>🐇</div>
        <div className="track"></div>
      </div>
    )
  }
}



class Track2 extends React.Component{
  constructor(){
    super()
    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timerId = setInterval(()=>{
      n+=20
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if(n>=100){
        window.clearInterval(timerId)
        this.props.success('我是小龟龟')

      }
    },1000)
  }

  render(){
    return (
      <div>
        <div className="player" style={this.state.style}>🐢</div>
        <div className="track"></div>
      </div>
    )
  }
}


ReactDOM.render(<App></App>, document.querySelector('#app'))