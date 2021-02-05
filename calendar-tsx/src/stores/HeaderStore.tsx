import { action, makeObservable } from 'mobx';
import { RootStore } from '.';
import { observable } from 'mobx'
import moment from 'moment'

export default class HeaderStore {
    
    root: any = RootStore;
    @observable calendarYM: any = moment();
    @observable today: any = moment();
    @observable selected: any = moment().format("YYYY-MM-DD");
    @observable currentY: any = moment().year();
    @observable currentM: any = moment().month() + 1;
    // @observable clickFn = () => {}
    // @observable clickFn2 = (clickDate: any) => {}

    constructor(root: RootStore) {
        makeObservable(this);
        this.root = root;
    }
    

    @action.bound
    changeSelected = (clickedDate: any) => {

        // day 클릭했을 때 발생하는 이벤트
        if (moment(clickedDate).isSame(this.selected, 'day')) {

            //this.clickFn();

            console.log(clickedDate);
            console.log(this.selected);
            return;
        }

        this.changeSelect(clickedDate);

        //this.clickFn2(clickedDate);


    }

    @action.bound
    onYearChanged(clickedYear: any) {
        console.log(clickedYear)

        this.currentY = clickedYear;
        
        this.selectYearChange(clickedYear);

        console.log('year', this.currentY, this.currentM);

        //this.clickFn2(clickedYear);
    
    }

    @action.bound
    onMonthChanged(clickedMonth: any) {

        this.currentM = clickedMonth;


        console.log('clickedMonth', clickedMonth);
      
        this.selectMonthChange(clickedMonth);

        console.log('month', this.currentY, this.currentM);
        //this.clickFn2(clickedMonth);

    }

    @action
    changeSelect(clickedDate: any){

        this.selected = clickedDate;

    }

    @action
    selectYearChange(clickedYear: any) {

        this.calendarYM = moment(`${this.currentY}-${this.currentM}-01`);

        console.log('calendarYM',this.calendarYM);

        this.currentY = clickedYear;

        console.log('clickedYear',clickedYear);

        console.log(this.currentY === clickedYear);

    }

    @action
    selectMonthChange(clickedMonth: any) {

        this.calendarYM =  moment(`${this.currentY}-${(this.currentM)}-01`);
        
        this.currentM = clickedMonth;
        
    }



    

}