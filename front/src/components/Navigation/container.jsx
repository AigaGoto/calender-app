import { connect } from "react-redux";

import {getNextMonth, getPreviousMonth} from '../../services/calendar'
import { calendarSetMonth } from "../../redux/calendar/action";

import Navigation from "./presentation";


const mapStateToProps = state => ({calendar: state.calendar});

const mapDispatchToProps = dispatch => ({
    setMonth: month => {
        dispatch(calendarSetMonth(month));
    }
});

const mergeProps = (stateProps, dispatchProps) => {

    return ({
    setNextMonth: () => {
        const nextMonth = getNextMonth(stateProps.calendar);
        dispatchProps.setMonth(nextMonth);
    },
    setPreviousMonth: () => {
        const prevMonth = getPreviousMonth(stateProps.calendar);
        dispatchProps.setMonth(prevMonth);
    },
})};

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(Navigation);