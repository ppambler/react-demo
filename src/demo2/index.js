import React from "react";
import ReactDOM from "react-dom";


function App() {
  return (
    <div>
      <Box1 name="+1" />
      <Box2 name="+2" />
    </div>
  );
}

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
    }
  }
  add() {
    this.setState({
      number: this.state.number + 1
    })
  }
  minus() {
    this.setState({
      number: this.state.number - 1
    })
  }
  render() { // 局部 render
    return (
      <div>
        App2 {this.props.name} {this.props.age}
        <div>
          <span className="tag">{this.state.number}</span>
          <button className="button" onClick={this.add.bind(this)}>+1</button>
          <button className="button" onClick={()=>this.minus()}> -1</button>
        </div>
      </div>
    )
  }
}
render();


function Box1(obj) {
  let number = 0;
  let onClickButton = () => {
    number += 1;
    console.log(number)
    render();
  };
  let onClickButton2 = () => {
    number -= 1;
    render();
  };
  return (
    <div className="parent">
      我的 name 是 {obj.name}
      <span className="tag">{number}</span>
      <button className="button is-primary" onClick={onClickButton}>
        +
      </button>
      <button className="button is-primary" onClick={onClickButton2}>
        -
      </button>
    </div>
  );
}
function Box2(obj) {
  let number = 0;
  let onClickButton = () => {
    number += 2;
    render();
  };
  let onClickButton2 = () => {
    number -= 2;
    render();
  };
  return (
    <div className="parent">
      我的 name 是 {obj.name}
      <span className="tag">{number}</span>
      <button className="button is-primary" onClick={onClickButton}>
        +
      </button>
      <button className="button is-primary" onClick={onClickButton2}>
        -
      </button>
    </div>
  );
}

function render() {
  ReactDOM.render(
    <App2 name="LeBron" age={18}/>, // React.createElement(App)
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

console.log(App());
