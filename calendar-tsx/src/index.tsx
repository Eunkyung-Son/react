import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'mobx-react'; 

// 브라우저 기록 개체는 브라우저의 기본 제공 기록 스택을 사용하여 애플리케이션의 검색 기록을 추적합니다. 
import { RootStore } from './stores';


const store = new RootStore();

// 세션 히스토리를 쉽게 관리하기 위해서 사용한다


ReactDOM.render(
  <Provider {...store}>
      {/** history -> mobx 상태 관리 라이브러리와 사용자 지정 기록을 동기화 한다. */}
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
