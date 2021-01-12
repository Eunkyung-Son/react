import React, { Component } from 'react'
import Header from './Header'
import Calendar from './Calendar'

import moment from 'moment'

import './RCA.css'

export default class App extends Component {

    yearArr = [];
    monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    currentY = moment().year();
    currentM = moment().month();
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

    componentWillMount() {

        for (let i = 2003; i <= 2024; i++) {
            this.yearArr.push(i)
        }


        for (let j = this.monthArr.indexOf[0]; j <= this.monthArr.length; j++) {
            this.monthArr.push(j)
        }

    }

    moveMonth = (month) => { // month의 상태를 변경시켜주는 함수
        this.setState({
            calendarYM: this.state.calendarYM.add(month, 'M')
            // add 메서드는 1번째 인자로 숫자를 받고 2번째 인자로 주, 일, 월, 연도에 해당하는 데이터를 받아
            // 현재 moment 객체에 더해서 새로운 momoent 객체를 반환한다.
        })
    }

    moveYear = (year) => {
        this.setState({
            calendarYM: this.state.calendarYM.add(year, 'Y')

        })
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

        if (moment(clickedDate).isBefore(this.state.calendarYM, 'month')) {
            // < 버튼을 클릭하면 Month를 현재 Month에서 -1 만큼 줄여라
            this.moveMonth(-1)
        } else if (moment(clickedDate).isAfter(this.state.calendarYM, 'month')) {
            // > 버튼을 클릭하면 Month를 현재 Month에서 1 만큼 늘려라
            this.moveMonth(1)
        }
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
        return (
            <div className="test-layout">
                <div className="RCA-app-container">
                    <div>
                        { /* month select */}
                        <select name="month" value={this.state.calendarYM.month() + 1} onChange={(e) => this.onMonthChanged(e.target.value)}>
                            {this.monthArr.length && this.monthArr.map((num, index) => (
                                <option value={index + 1}>{num}</option>
                            ))}
                        </select>
                        {/* year select */}
                        <select name="year"
                            value={this.state.calendarYM.year()}


                            onChange={(e) => this.onYearChanged(e.target.value)}>
                            {this.yearArr.length && this.yearArr.map((num) => (
                                <option value={num}>{num}</option>
                            ))
                            }
                        </select>
                    </div>

                    { /* 오늘 날짜를 표시 해주기 위하여 moment 객체를 이용함 */}
                    <Header calendarYM={this.state.calendarYM.format("YYYY년 MM월")}
                        today={this.state.today.format("YYYY - MM - DD")}
                        moveMonth={this.moveMonth}
                    />
                    <Calendar YM={this.state.calendarYM.format("YYYY-MM-DD")}
                        selected={this.state.selected}
                        changeSelected={this.changeSelected}
                    />

                </div>

            </div>
        )
    }
}
