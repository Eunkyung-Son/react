import React, { Component } from 'react'
import moment from 'moment';

class Week extends Component {


  state = {}

  Days = (firstDayFormat, weekIndex) => {
    const _days = [];

    for (let i = 0; i < 7; i++) {

      const Day = moment(firstDayFormat).add('d', i);
      _days.push({
        yearMonthDayFormat: Day.format("YYYY-MM-DD"),
        getDay: Day.format('DD'),
        isHolyDay: false,
        weekIndex
      });
    }

    return _days;
  }

  mapDaysToComponents = (Days, calendarMonthYear, selectedDayFormat, fn = (a) => { }) => {

    const thisMonth = moment(calendarMonthYear);

    return Days.map((dayInfo, i) => {

      let className = "date-weekday-label";

      // 이번달이 아닌 day
      if (!thisMonth.isSame(dayInfo.yearMonthDayFormat, 'month')) {
        className = "date-notThisMonth";
      }

      // 오늘의 날짜와 선택한 날짜가 같으면
      if (moment(dayInfo.yearMonthDayFormat).isSame(selectedDayFormat, 'day')) {
        className = "selected"
      }

      return (
        <div className={"RCA-calendar-day " + className} key={`RCA-${dayInfo.weekIndex}-${i}-day`} onClick={() => fn(dayInfo.yearMonthDayFormat)}>
          <label className="RCA-calendar-day">{dayInfo.getDay}</label>
        </div>
      )
    })
  }




  render() {
    return (
      <div className="RCA-calendar-week">
        {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat, this.props.weekIndex),
          this.props.ymOfThisCalendar,
          this.props.selected,
          this.props.fn
        )}
      </div>
    )
  }
}

class DateHeader extends Component {

  // Array.map 메서드를 이용하여 date를 동일한 컴포넌트로 만들어 줄 것이기 때문에
  // props로 전달 받은 dates의 형식을 구분해야 한다.
  // props로 전달하는 dates의 경우는 Date가 array로 전달되는 경우,
  // Date가 string이 되는 경우, 전달 되지 않는 경우 총 3가지 경우 이다.

  // dateToArray 함수는 해당 props가 map을 쓰기 위하여 string이 들어오면
  // split 메서드를 이용하여 스트링을 array로 변환시킨다.
  // 다른 타입의 객체가 들어오는 경우 에러를 방지하기 위하여
  // else문으로 default DateArray를 전달한다.
  dateToArray = (dates) => {
    if (Array.isArray(dates)) {
      return dates
    } else if (typeof dates === "string") {
      return dates.split(',')
    } else {
      return ["일", "월", "화", "수", "목", "금", "토"]
    }
  }

  mapArrayToDate = (dateArray) => {
    try {
      if (dateArray.length !== 7) {
        console.log(new Error("dates props must be had 7 date"))
        dateArray = ["일", "월", "화", "수", "목", "금", "토"]
      }

      return dateArray.map((date, index) => {
        // 컴포넌트 중 일, 토, 평일은 구분해주어야 하기 대문에 index에 따라서 className이 결정된다 -> 색상으로 구분해 주기 위한 css 클래스
        const className = () => {
          let className = "RCA-calendar-date-component";
          if (index === 0) {
            return className + " date-sun"
          } else if (index === 6) {
            return className + " date-sat"
          } else {
            return className + " date-weekday"
          }
        }
        return (
          <div className={className()} key={"RCA-header-" + date}>
            {date}
          </div>
        )
      })
    } catch {
      throw new Error("date must be string or component")
    }
  }

  render() {
    return (
      <div className="RCA-calendar-date-header">
        {this.mapArrayToDate(this.dateToArray(this.props.dates))}
      </div>
    )
  }
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(event) {
    console.log(this, event)
  }

  Weeks = (monthYear, selected, clickFn) => {
    //"2020-01"
    const firstDayOfMonth = moment(monthYear).startOf('month');
    const firstDateOfMonth = firstDayOfMonth.get('d');

    const firstDayOfWeek = firstDayOfMonth.clone().add('d', -firstDateOfMonth);

    const _Weeks = [];


    // 이번 달과 이번 달이 아닌 달의 label 색상 구분짓기
    for (let i = 0; i < 6; i++) {
      _Weeks.push((
        <Week key={`RCA-calendar-week-${i}`}
          weekIndex={i}
          ymOfThisCalendar={firstDayOfMonth.format("YYYY-MM")}
          firstDayOfThisWeekformat={firstDayOfWeek.clone().add('d', i * 7).format("YYYY-MM-DD")}
          selected={selected}
          fn={clickFn}
        />
      ))
    }
    return _Weeks
  }

  render() {
    console.log('C-props', this.props.YM);
    return (
      <div className="RCA-calendar-container">
        <DateHeader dates={"Su, Mo, Tu, We, Th, Fr, Sa"} />
        {this.Weeks(this.props.YM, this.props.selected, this.props.changeSelected)}
        <button onClick={this.handleSave}>Save</button>

      </div>
    )
  }
}

export default Calendar;
