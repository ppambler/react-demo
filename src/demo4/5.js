import React from "react";
import ReactDOM from "react-dom";
import "./1.css";

var money = {
  amount: 100000,
};

var user = {
  id: 1,
  nickName: "King",
};

// 集中管理数据的地方
var store = {
  money: money,
  user: user
}

var eventMap = {};
var eventHub = {
  trigger(eventName, data) {
    let fnList = eventMap[eventName];
    if (!fnList) return;
    for (var i = 0; i < fnList.length; i++) {
      fnList[i](data);
    }
  },
  on(eventName, fn) {
    if (!eventMap[eventName]) {
      eventMap[eventName] = [];
    }
    eventMap[eventName].push(fn);
  },
};

var 管家 = {
  init() {
    // 订阅 subscribe
    eventHub.on("我想花钱", (data) => {
      console.log("管家");
      money.amount -= data; // reducer 对数据的变动
      // 此时要调用render才能实现 数据的同步
      render();
    });
  },
};

管家.init(eventMap);
console.log();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      money: money,
      user: user
    };
  }
  render() {
    return (
      <div className="root">
        <div>app</div>
        <div>管家目前管理的金额：{this.state.money.amount}</div>
        <FirstFather money={this.state.money} user={this.state.user} />
        <SecondFather money={this.state.money} />
      </div>
    );
  }
}

class FirstFather extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="papa">
        <div>大爸 {this.props.money.amount}</div>
        <div>NickName：{this.props.user.nickName}</div>
        <Son1 money={this.props.money} />
        <Son2 money={this.props.money} />
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
    eventHub.trigger("我想花钱", 100);
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
  ReactDOM.render(<App />, document.querySelector("#root"));
}

render();
