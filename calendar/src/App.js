import React, { Component } from 'react'
import Header from './Header'
import Calendar from './Calendar'

import moment from 'moment'

import './RCA.css'

export default class App extends Component {

    // 전역으로 변수 선언
    yearArr = [];
    monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // 현재 년 월의 정보 가져옴
    currentY = moment().year();
    currentM = moment().month() + 1;

    constructor(props) {
        super(props);
        this.state = {
            // currentYM: "2021-10",
            calendarYM: moment(), // 년 월
            today: moment(), // 오늘
            // selected: moment().format("YYYY-MM-DD"), // 날짜 표현 포멧

        }

        // console.log('year', this.state.calendarYM.year());
    }


    static defaultProps = {
        clickFn: () => { }
    }

    // 컴포넌트가 그려지기 전에 배열 만들어줌
    componentWillMount() {

        for (let i = 2003; i <= 2024; i++) {
            this.yearArr.push(i)
        }


        for (let j = this.monthArr.indexOf[0]; j <= this.monthArr.length; j++) {
            this.monthArr.push(j)
        }

    }

    changeSelected = (clickedDate) => {

        // day 클릭했을 때 발생하는 이벤트
        if (moment(clickedDate).isSame(this.state.selected, 'day')) {
            this.props.clickFn(clickedDate);
            console.log(clickedDate);
            console.log(this.state.selected);
            return;
        }

        this.setState({
            selected: clickedDate
        })

        this.props.clickFn(clickedDate)
        // select box 를 클릭하면 그 값에 맞는 날짜가 캘린더에 출력되어야 한다.

    }

    onYearChanged(clickedYear) {

        this.currentY = clickedYear;

        this.setState({
            calendarYM: moment(`${this.currentY}-${(this.currentM)}-01`)

        })
        console.log('year', this.currentY, this.currentM);

        this.props.clickFn(clickedYear)
    }

    onMonthChanged(clickedMonth) {
        this.currentM = clickedMonth;


        this.setState({
            calendarYM: moment(`${this.currentY}-${(this.currentM)}-01`)

        })

        console.log('month', this.currentY, this.currentM);
        this.props.clickFn(clickedMonth)

    }

    render() {
        const { calendarYM, selected } = this.state;
        return (
            <div className="test-layout">
                <div className="RCA-app-container">
                    <div>
                        { /* month select */}
                        <select name="month" value={calendarYM.month() + 1} onChange={(e) => this.onMonthChanged(e.target.value)}>
                            {this.monthArr.length && this.monthArr.map((num, index) => (
                                <option value={index + 1}>{num}</option>
                            ))}
                        </select>
                        {/* year select */}
                        <select name="year"
                            value={calendarYM.year()}


                            onChange={(e) => this.onYearChanged(e.target.value)}>
                            {this.yearArr.length && this.yearArr.map((num) => (
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