import React from "react";
import ReactDOM from "react-dom";
import "./1.css";
import { createStore } from "redux";

// 管家 -> 一个函数 -> 返回值是 state
let reducers = (state = 0, action) => {
  state = state || {
    money: {
      amount: 100000,
    },
    user: {
      nickName: 'King'
    }
  };
  switch (action.type) {
    case "ADD":
      console.log("ADD");
      console.log(state);
      return Object.assign({}, state, {
        money: { amount: state.money.amount + action.payload },
      });
    case "MINUS":
      console.log("MINUS");
      return Object.assign({}, state, {
        money: { amount: state.money.amount - action.payload },
      });
    default:
      console.log('default')
      return state;
  }
};

// 数据仓库
const store = createStore(reducers);
console.log(store)

console.log(store.getState());

class App extends React.Component {
  render() {
    return (
      <div className="root">
        <div>app</div>
        <div>管家目前管理的金额：{this.props.store.money.amount}</div>
        <FirstFather money={this.props.store.money} user={this.props.store.user} />
        <SecondFather money={this.props.store.money} />
      </div>
    );
  }
}

// function App(props) {
//   return (
//     <div className="root">
//       <div>app</div>
//       <div>管家目前管理的金额：{props.store.money.amount}</div>
//       <FirstFather money={props.store.money} user={props.store.user} />
//       <SecondFather money={props.store.money} />
//     </div>
//   );
// }

class FirstFather extends React.Component {
  constructor() {
    super();
  }
  x() {
    store.dispatch({ type: "ADD", payload: 100 });
  }
  render() {
    return (
      <div className="papa">
        <div>大爸 {this.props.money.amount}</div>
        <div>NickName：{this.props.user.nickName}</div>
        <Son1 money={this.props.money} />
        <Son2 money={this.props.money} />
        <button className="button" onClick={() => this.x()}>
          打钱
        </button>
      </div>
    );
  }
}

class SecondFather extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="papa">
        <div>二爸 {this.props.money.amount}</div>
        <Son3 money={this.props.money} />
        <Son4 money={this.props.money} />
      </div>
    );
  }
}

class Son1 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div className="son">儿子1 {this.props.money.amount}</div>;
  }
}

class Son2 extends React.Component {
  constructor() {
    super();
  }
  x() {
    console.log("son2");
    // action -> 事件，「我想花钱」就是「action type」
    // 「100」就是「payload」(载荷)
    // eventHub.trigger("我想花钱", 100);
    this.props.money.amount -= 300
    store.dispatch({ type: "MINUS", payload: 100, });
  }
  render() {
    return (
      <div className="son">
        儿子2 {this.props.money.amount}
        <button className="button" onClick={() => this.x()}>
          消费
        </button>
      </div>
    );
  }
}

class Son3 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div className="son">儿子3 {this.props.money.amount}</div>;
  }
}

class Son4 extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <div className="son">儿子4 {this.props.money.amount}</div>;
  }
}

function render() {
  ReactDOM.render(
    <App store={store.getState()} />,
    document.querySelector("#root")
  );
}

render();
store.subscribe(render);
