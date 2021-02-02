import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'mobx-react';
import { CounterStore } from './store/CounterStore';

// mobx와 react를 연결해주는 provider 
// provider는 store를 제공을 한다 -> props 형태로 제공
// App 하위에 있는 모든 컴포넌트들은 CounterStore를 사용할 수 있다.
ReactDOM.render(
  <Provider counterStore={CounterStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
