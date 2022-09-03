import './public-path.js'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom'

export async function bootstrap(){
  console.log('react app bootstraped');
}

export async function mount(props) {
  ReactDOM.render(
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? "/micro-app2" : "/"}
    >
      <App />
    </BrowserRouter>,
    props.container
      ? props.container.querySelector('#root')
      : document.getElementById('root')
  )
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector('#root')
      : document.getElementById('root')
  )
}

export async function update(props) {
  console.log('update props', props)
}

if(!window.__POWERED_BY_QIANKUN__){
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
