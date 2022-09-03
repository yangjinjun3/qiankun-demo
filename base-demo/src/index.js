import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'

import {initGlobalState, registerMicroApps, start} from 'qiankun'

const state = {
  nickname: '最爱白菜'
}

//初始化state
const actions = initGlobalState(state)
actions.onGlobalStateChange((state, prev) => {

})

setTimeout(() => {
  actions.setGlobalState({...state, age: 19})
}, 2000);

actions.offGlobalStateChange()

registerMicroApps([
  {
    name: 'micro-app1',
    entry: "//localhost:3011",
    container: "#micro-app1",
    activeRule: "/micro-app1",
    props:{
      nickname:'ymh',
      age: 18
    }
  },
  {
    name: 'micro-app2',
    entry: "//localhost:3012",
    container: "#micro-app2",
    activeRule: "/micro-app2",
    props:{
      nickname:'ymh',
      age: 18
    }
  },
  {
    name: 'micro-app3',
    entry: "//localhost:3013",
    container: "#micro-app3",
    activeRule: "/micro-app3",
    props:{
      nickname:'ymh',
      age: 18
    }
  }
])

start()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
