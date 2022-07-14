import { connect } from "react-redux";

import {getMonth,formatMonth , getNextMonth, getPreviousMonth} from '../../services/calendar'
import { calendarSetMonth } from "../../redux/calendar/action";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

import Navigation from "./presentation";


const mapStateToProps = state => ({calendar: state.calendar});

const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    },
    fetchItem: month => {
        dispatch(asyncSchedulesFetchItem(month))
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
        dispatchProps.fetchItem(nextMonth)
    },
    setPreviousMonth: () => {
        const prevMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(prevMonth);
        dispatchProps.fetchItem(prevMonth);
    },
    // datePickerの変更があった時用
    setMonth: dayObj => {
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);
        dispatchProps.fetchItem(month);
    }
});

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Navigation);