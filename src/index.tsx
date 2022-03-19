import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {registerMicroApps, start}  from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//192.168.3.10:3001',
    container: '#container',
    activeRule: '/sub-app-react'
  },
  {
    name: 'vueApp',
    entry: '//192.168.3.10:8080',
    container: '#container',
    activeRule: '/sub-app-vue'
  },
  {
    name: 'vue3App',
    entry: '//192.168.3.10:8081',
    container: '#container',
    activeRule: '/sub-app-vue3'
  }
]);

start({
  sandbox: {
    experimentalStyleIsolation: true
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
