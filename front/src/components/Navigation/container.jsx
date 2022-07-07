import { connect } from "react-redux";

import {getMonth,formatMonth , getNextMonth, getPreviousMonth} from '../../services/calendar'
import { calendarSetMonth } from "../../redux/calendar/action";

import Navigation from "./presentation";


const mapStateToProps = state => ({calendar: state.calendar});

const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    month: getMonth(stateProps.calendar),
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
        const prevMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(prevMonth);
    },
    setMonth: dayObj => {
        const month = formatMonth(dayObj);
        dispatchProps.setMonth(month);
    }
});

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Navigation);