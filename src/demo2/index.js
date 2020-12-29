import React from "react";
import ReactDOM from "react-dom";

render();

function App() {
  return (
    <div>
      <Box1 name="+1" />
      <Box2 name="+2" />
    </div>
  );
}

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

console.log(App());
