import React from 'react'
import moment from 'moment';
import DateHeader from './DateHeader';
import Week from './Week';
import '../RCA.css'



type Props = {
    dates?: any,
    weekIndex?: any,
    ymOfThisCalendar?: string,
    firstDayOfThisWeekformat?: string,
    selected?: string,
    fn?: any,
    YM?: any, 
    changeSelected?: any,

}

type State = {

}


class Calendar extends React.Component<Props, State> {

  Weeks = (monthYear:any, selected:any, clickFn:any) => {
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
    const { YM, selected, changeSelected } = this.props;

    console.log('C-props', this.props.YM);
    return (
      <div className="RCA-calendar-container">
        <DateHeader dates={"Su, Mo, Tu, We, Th, Fr, Sa"} />
        {this.Weeks(YM, selected, changeSelected)}

      </div>
    )
  }
}

export default Calendar;

