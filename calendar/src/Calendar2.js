import React, { Component } from 'react'
import moment from 'moment';

class Calendar2 extends Component {

    // state : selectedDay 
    // props : year month
    // render : <Day type='today | selected | activeDay | inactiveDay' day="1~31">

    // year = 2021;
    // month = 1;

    // days = [];
    // componentDidMount() {
    //     console.log(this.year, this.month);
    //     const startDay = {};
    //     const endDay = {};
    //     for (let day = startDay; day <= endDay; day++) {
    //         // 오늘, 선택된날짜인지, 이전 또는 이후 월의 날짜인지, 해당월의 날짜인지
    //         if (day === TODAY) {
    //             type = 'today'
    //         }
    //         day = {
    //             weekDay: moment(year - month - day).weekday,
    //             type: 'today | selected | activeDay | inactiveDay'
    //         }

    //         this.days.push(day);
    //     }
    // }


    render() {
        return
        // this.days.map((day) => {
        //     return <Day type={day.type}></Day>;
        // })
    }
}
