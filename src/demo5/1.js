import { createStore } from "redux";

var store;




function add1() {
  store.dispatch({type:'add', payload:1})
  // 1 dispatch 一个 action
}
function add2() {
  store.dispatch({type:'add', payload:2})
}
function add1IfOdd() {
  var oldState = store.getState()
  if(oldState % 2 === 1) {
    store.dispatch({type:'add', payload:1})
  }
}

function add1Async() {
  setTimeout(()=>{
    store.dispatch({type:'add', payload:1})
  },2000)
}

Object.assign(window,{add1,add2,add1IfOdd,add1Async})

function render(store) {
  var app = document.querySelector("#root");
  app.innerHTML = `
    <div>
      you click <span id="value">${store.getState()}</span>次
      <button id="add1" onclick="add1()">+1</button>
      <button id="add2" onclick="add2()">+2</button>
      <button id="add1IfOdd" onclick="add1IfOdd()">如果是单数就+1</button>
      <button id="add1After2Sec" onclick="add1Async()">两秒后+1</button>
    </div>
  `;
}

function stateChanger(state,action) {
  if(state === undefined) {
    return 0
  }else {
    if(action.type === 'add') {
      var newState = state + action.payload
      return newState // 2 根据操作生成新的 state, 触发一个事件
    } else {
      return state
    }
  }
}

// store -> 给我的感觉就像是仓库管理员
store = createStore(stateChanger)

render(store)
store.subscribe(()=>{
  render(store) // 3 接收到事件，重新 render
})
