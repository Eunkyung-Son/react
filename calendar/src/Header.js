import React, { Component } from 'react'
import moment from 'moment';

class Header extends Component {

    // 전역으로 변수 선언
    yearArr = [];
    monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // 현재 년 월의 정보 가져옴
    currentY = moment().year();
    currentM = moment().month() + 1;

    render() {
        return (
            <div className="RCA-header-container">
            </div>
        )
    }
}

export default Header;
