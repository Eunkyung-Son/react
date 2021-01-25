import React from 'react';
import '../RCA.css'


type Props = {
    dates: any,

}

type State = {

}

export default class DateHeader extends React.Component<Props, State> {

  // Array.map 메서드를 이용하여 date를 동일한 컴포넌트로 만들어 줄 것이기 때문에
  // props로 전달 받은 dates의 형식을 구분해야 한다.
  // props로 전달하는 dates의 경우는 Date가 array로 전달되는 경우,
  // Date가 string이 되는 경우, 전달 되지 않는 경우 총 3가지 경우 이다.

  // dateToArray 함수는 해당 props가 map을 쓰기 위하여 string이 들어오면
  // split 메서드를 이용하여 스트링을 array로 변환시킨다.
  // 다른 타입의 객체가 들어오는 경우 에러를 방지하기 위하여
  // else문으로 default DateArray를 전달한다.
  dateToArray = (dates:any) => {
    if (Array.isArray(dates)) {
      return dates
    } else if (typeof dates === "string") {
      return dates.split(',')
    } else {
      return ["일", "월", "화", "수", "목", "금", "토"]
    }
  }

  mapArrayToDate = (dateArray:any) => {
    try {
      if (dateArray.length !== 7) {
        console.log(new Error("dates props must be had 7 date"))
        dateArray = ["일", "월", "화", "수", "목", "금", "토"]
      }

      return dateArray.map((date:any) => {
        // 컴포넌트 중 일, 토, 평일은 구분해주어야 하기 대문에 index에 따라서 className이 결정된다 -> 색상으로 구분해 주기 위한 css 클래스
        const className = () => {
          let className = "RCA-calendar-date-component";

          return className + " date-weekday"

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

    const { dates } = this.props;

    return (
      <div className="RCA-calendar-date-header">
        {this.mapArrayToDate(this.dateToArray(dates))}
      </div>
    )
  }
}