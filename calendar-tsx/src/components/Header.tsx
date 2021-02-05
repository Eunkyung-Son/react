import React from 'react'
import Calendar from './Calendar'


import '../RCA.css';
import { HeaderStore } from '../stores';
import { inject, observer } from 'mobx-react';

type Props = {
    headerStore?: HeaderStore;
};

type State = {

};


@inject('headerStore')
@observer
export default class Header extends React.Component<Props, State> {

        yearArr: any = [];
        monthArr: any = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
        
        componentWillMount() {
        const { monthArr, yearArr } = this;

        for (let i = 2003; i <= 2024; i++) {
        
            yearArr.push(i)
        

        }

        for (let j = monthArr.indexOf[0]; j <= monthArr.length; j++) {

            monthArr.push(j)
        
        }

        console.log('yearArr',yearArr);
        console.log('monthArr',monthArr);

    }

    render() {
        const { headerStore } = this.props;
        return (
            <div className="test-layout">
                <div className="RCA-app-container">
                    <div className="selectbox">
                        {/* year select */}
                        <select name="year"
                            value={headerStore?.calendarYM.year()}


                            onChange={(e) => headerStore?.onYearChanged(e.target.value)}>
                            {this.yearArr.length && this.yearArr.map((num:number) => (
                                <option value={num}>{num}</option>
                            ))
                            }
                        </select>

                        { /* month select */}
                        <select name="month" value={headerStore?.calendarYM.month() + 1} onChange={(e) => headerStore?.onMonthChanged(e.target.value)}>
                            {this.monthArr.length && this.monthArr.map((num:number, index:number) => (
                                <option value={index + 1}>{num}</option>
                            ))}
                        </select>

                    </div>

                    <Calendar YM={headerStore?.calendarYM.format("YYYY-MM-DD")}
                        selected={headerStore?.selected}
                        changeSelected={headerStore?.changeSelected}
                    />

                </div>

            </div>
        )
    }
}