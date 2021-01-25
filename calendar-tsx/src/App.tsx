import React from 'react'
import Calendar from './components/Calendar'

import moment from 'moment'

import './RCA.css'

type Props = {

}

type State = {
  calendarYM: any,
  today: any,
  selected: any,
  monthArr: any,
  yearArr: any,
  currentY: any,
  currentM: any,
}

export default class App extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
             monthArr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
             yearArr: [],
            // currentYM: "2021-10",
            calendarYM: moment(), // 년 월
            today: moment(), // 오늘
            selected: moment().format("YYYY-MM-DD"), // 날짜 표현 포멧
                // 현재 년 월의 정보 가져옴
            currentY: moment().year(),
            currentM:moment().month() + 1,

        }

        // console.log('year', this.state.calendarYM.year());
    }


    // 컴포넌트가 그려지기 전에 배열 만들어줌
    async componentWillMount() {

      for (let i = 2003; i <= 2024; i++) {
        
            this.state.yearArr.push(i)
        }


        for (let j = this.state.monthArr.indexOf[0]; j <= this.state.monthArr.length; j++) {
            this.state.monthArr.push(j)
        }

    }

    clickFn = () => {}

    clickFn2 = (clickedDate: any) => {

    }


    changeSelected = (clickedDate: any) => {

        // day 클릭했을 때 발생하는 이벤트
        if (moment(clickedDate).isSame(this.state.selected, 'day')) {
            this.clickFn();
            console.log(clickedDate);
            console.log(this.state.selected);
            return;
        }

        this.setState({
            selected: clickedDate
        })

        this.clickFn2(clickedDate)
        // select box 를 클릭하면 그 값에 맞는 날짜가 캘린더에 출력되어야 한다.


    }

    onYearChanged(clickedYear: any) {


        this.setState({
            calendarYM: moment(`${this.state.currentY}-${(this.state.currentM)}-01`),
          currentY: clickedYear
        })
        console.log('year', this.state.currentY, this.state.currentM);

        this.clickFn2(clickedYear)
    }

    onMonthChanged(clickedMonth: any) {
      
      
      this.setState({
            currentM: clickedMonth,
            calendarYM: moment(`${this.state.currentY}-${(this.state.currentM)}-01`)

        })

        console.log('month', this.state.currentY, this.state.currentM);
        this.clickFn2(clickedMonth)

    }

    render() {
        const { calendarYM, selected } = this.state;
        return (
            <div className="test-layout">
                <div className="RCA-app-container">
                    <div>
                        { /* month select */}
                        <select name="month" value={calendarYM.month() + 1} onChange={(e) => this.onMonthChanged(e.target.value)}>
                            {this.state.monthArr.length && this.state.monthArr.map((num:number, index:number) => (
                                <option value={index + 1}>{num}</option>
                            ))}
                        </select>
                        {/* year select */}
                        <select name="year"
                            value={calendarYM.year()}


                            onChange={(e) => this.onYearChanged(e.target.value)}>
                            {this.state.yearArr.length && this.state.yearArr.map((num:number) => (
                                <option value={num}>{num}</option>
                            ))
                            }
                        </select>
                    </div>

                    <Calendar YM={calendarYM.format("YYYY-MM-DD")}
                        selected={selected}
                        changeSelected={this.changeSelected}
                    />

                </div>

            </div>
        )
    }
}