import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="RCA-header-container">
                <h2 className="RCA-header-calendarYM RCA-header-middle">
                    {/* 현재 년 월 출력 */}
                    {this.props.calendarYM}
                </h2>
                <h3 className="RCA-header-today RCA-header-middle">
                    { /* 현재 년 월 날짜 출력 */}
                    {this.props.today}
                </h3>
                <ul className="RCA-header-buttons RCA-header-middle">
                    <li>
                        {/* < 버튼을 클릭하면 현재 월에서 -1 만큼 이동 */}
                        <i className="move-button left-img icon" onClick={() => { this.props.moveMonth(-1) }}>

                        </i>
                    </li>
                    <li>
                        오늘
                    </li>
                    <li>
                        {/* > 버튼을 클릭하면 현재 월에서 +1 만큼 이동 */}
                        <i className="move-button right-img icon" onClick={() => { this.props.moveMonth(1) }}>

                        </i>
                    </li>

                </ul>
            </div>
        )
    }
}

export default Header;