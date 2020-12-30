import React from "react";
import ReactDOM from "react-dom";



class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  add() {
    this.setState({
      number: this.state.number + 1,
    });
  }
  minus() {
    this.setState({
      number: this.state.number - 1,
    });
  }
  render() {
    // 局部 render
    return (
      <div>
        App2 {this.props.name} {this.props.age}
        <div>
          <span className="tag">{this.state.number}</span>
          <button className="button" onClick={this.add.bind(this)}>
            +1
          </button>
          <button className="button" onClick={() => this.minus()}>
            {" "}
            -1
          </button>
        </div>
      </div>
    );
  }
}
// render();
// console.log(App())

class Box1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  add() {
    this.setState({
      number: this.state.number + 1,
    });
  }
  minus() {
    this.setState({
      number: this.state.number - 1,
    });
  }
  render() {
    return (
      <div className="parent">
        我的 name 是 {this.props.name}
        <span className="tag">{this.state.number}</span>
        <button className="button is-primary" onClick={this.add.bind(this)}>
          +1
        </button>
        <button className="button is-primary" onClick={this.minus.bind(this)}>
          -1
        </button>
      </div>
    );
  }
}
class Box2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  add() {
    this.setState((state)=>{
      console.log(state)
      return {number: state.number+1}
    });
    for(let i = 1;i<10;i++) {
      console.log(i)
    }
    this.setState((state)=>{
      console.log(state)
      return {number: state.number+1}
    });
    for(let j = 1;j<100;j++) {
      console.log(j)
    }
  }
  minus() {
    console.log(this.state.number)
    this.setState({
      number: this.state.number - 1,
    });
    for(let i = 1;i<10;i++) {
      console.log(i)
    }
    this.setState({
      number: this.state.number - 1,
    });
    for(let j = 1;j<10;j++) {
      console.log(j)
    }
    console.log(this.state.number)
  }
  render() {
    return (
      <div className="parent">
        我的 name 是 {this.props.name}
        <span className="tag">{this.state.number}</span>
        <button className="button is-primary" onClick={this.add.bind(this)}>
          +2
        </button>
        <button className="button is-primary" onClick={this.minus.bind(this)}>
          -2
        </button>
      </div>
    );
  }
}

function App(props) {
  return (
    <div>
      <Box1 name="Box1" />
      <Box2 name="Box2" />
    </div>
  );
}

function render() {
  ReactDOM.render(
    <App />, // React.createElement(App)
    document.querySelector("#app")
  );
}

// function render() {
//   let h = React.createElement
//   ReactDOM.render(
//     h(App),
//     document.querySelector("#app")
//   );
// }

// console.log(App());

render()

let x = (<Box1 />)
let y = (<Box1 />)
console.log(x)
console.log(y)
console.log(x === y)
