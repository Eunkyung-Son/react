import React from 'react'
import moment from 'moment';
import '../RCA.css'



type Props = {
    weekIndex: any,
    ymOfThisCalendar: string,
    firstDayOfThisWeekformat: any,
    selected: string,
    fn: any,

}

type State = {

}


class Week extends React.Component<Props, State> {

    dayArr = (firstDayFormat: string, weekIndex: string) => {
        const fullWeekArr = []; // week의 인덱스가 전부 채워질 배열

        console.log("week의 첫번째 날짜 : ", firstDayFormat);
        console.log("해당 월에서 몇번째 week인지 : ", weekIndex);

        for (let i = 0; i < 7; i++) {

            const firstDayOfWeekInitArr = moment(firstDayFormat).add('d', i);
            // week의 첫번째 날짜로 초기화한 배열
            fullWeekArr.push({ // 초기화한 배열에 반복문을 돌면서 날짜 정보를 채우자
                yearMonthDayFormat: firstDayOfWeekInitArr.format("YYYY-MM-DD"),
                getDay: firstDayOfWeekInitArr.format('DD'),
                isHolyDay: false,
                weekIndex
            });
        }

        return fullWeekArr;
    }

    mapDaysToComponents = (Days: any, calendarMonthYear: any, selectedDayFormat: any, fn = (a: any) => { }) => {

        const thisMonth = moment(calendarMonthYear);

        return Days.map((dayInfo: any, i: number) => {

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
                    <label className="RCA-calendar-day-p">{dayInfo.getDay}</label>
                </div>
            )
        })
    }

    render() {
        const { ymOfThisCalendar, selected, fn, weekIndex, firstDayOfThisWeekformat } = this.props;

        return (
            <div className="RCA-calendar-week">
                {this.mapDaysToComponents(this.dayArr(firstDayOfThisWeekformat, weekIndex),
                    ymOfThisCalendar,
                    selected,
                    fn
                )}
            </div>
        )
    }
}

export default Week;