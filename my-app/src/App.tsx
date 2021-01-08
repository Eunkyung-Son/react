import React from 'react';
import { Calendar } from 'antd';
import './App.css';


const App: React.FC = () => {
  // Typescript Functional Component

  // 날짜 박스를 클릭하면 콘솔에 오늘의 년/월/일 출력
  function onClick(value: any) {
    console.log(value.format('YYYY-MM-DD'));
  }
  return (
    // App Component rendering
    <div className="App">
      {/* CalendarProps에 정의된 onChange ->
      캘린더의 값이 변경될 때 마다 onClick 함수 실행 */}
      <Calendar onChange={onClick} />
    </div>
  );
}


export default App;