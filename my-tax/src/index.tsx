import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'mobx-react'; 

import RootStore from './stores/RootStore'

import { Layout } from 'antd';

const store = new RootStore();


ReactDOM.render(
  <Provider {...store}>
    <Layout>
      <App />
    </Layout>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
