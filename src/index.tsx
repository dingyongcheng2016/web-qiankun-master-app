import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {registerMicroApps, setDefaultMountApp, runAfterFirstMounted, start}  from 'qiankun';


/**
 * 主应用 **可以使用任意技术栈**
 * 以下分别是 React 和 Vue 的示例，可切换尝试
 */
 import render from './render/ReactRender';
 
 /**
  * Step1 初始化应用（可选）
  */
 render({ loading: true });
 
 const loader = (loading: boolean) => render({ loading });

/**
 * Step2 注册子应用
 */
registerMicroApps([
  {
    name: 'reactApp',
    entry: '//192.168.3.10:3001',
    container: '#subapp-viewport',
    loader,
    activeRule: '/sub-app-react',
    // props - object - 可选，主应用需要传递给微应用的数据。
  },
  {
    name: 'vueApp',
    entry: '//192.168.3.10:8080',
    container: '#subapp-viewport',
    loader,
    activeRule: '/sub-app-vue',
    // props - object - 可选，主应用需要传递给微应用的数据。
  },
  {
    name: 'vue3App',
    entry: '//192.168.3.10:8081',
    container: '#subapp-viewport',
    loader,
    activeRule: '/sub-app-vue3',
    // props - object - 可选，主应用需要传递给微应用的数据。
    }
  ],
  // loader - (loading: boolean) => void - 可选，loading 状态发生变化时会调用的方法。
  {
    // @ts-ignore
    beforeLoad: (app) => console.log('[LifeCycle] before load %c%s', 'color: green;', app.name),
    // @ts-ignore
    beforeMount: [(app) => console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)],
    // @ts-ignore
    afterUnmount: (app) => console.log('[LifeCycle] before unmount %c%s', 'color: green;', app.name),
  },
);


/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/sub-app-react');


/**
 * Step4 启动应用
 */
start({
  sandbox: {
    experimentalStyleIsolation: true
  }
}
);


//第一个微应用 mount 后需要调用的方法，比如开启一些监控或者埋点脚本。
runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
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
