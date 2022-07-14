import { connect } from "react-redux";
import { createCalendar } from "../../services/calendar";
import CalendarBoard from "./presentation";

import { addScheduleOpenDialog, addScheduleSetValue } from "../../redux/addSchedule/actions";
import { currentScheduleOpenDialog, currentScheduleSetItem } from "../../redux/currentSchedule/actions";
import { setSchedules } from "../../services/schedule";

import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

// stateから必要な情報を抜き出してpropsに伝える
const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.schedules
});

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog());
        dispatch(addScheduleSetValue({date: d}));
    },
    openCurrentScheduleDialog: (schedule, e) => {
        e.stopPropagation();

        dispatch(currentScheduleOpenDialog())
        dispatch(currentScheduleSetItem(schedule))
    },
    fetchSchedule: month => {
        dispatch(asyncSchedulesFetchItem(month))
    }
});

const mergeProps = (stateProps, dispatchProps) => {

    const {
        calendar: month,
        schedules: {items: schedules}
    } = stateProps

    // カレンダーとスケジュールを照らし合わせる
    const calendar = setSchedules(createCalendar(month), schedules)

    return {
        ...stateProps,
        ...dispatchProps,
        month,
        calendar,
        fetchSchedule: () => dispatchProps.fetchSchedule(month),
    }
};

// ------------------------ mergePropsを使う理由 -----------------------------
// 
// mapStateToProps は　store全体の何かが変更されたことを感知して実行される
// mergeProps　は　mapStateToPropsの結果が違かったら実行される
//
// mapStateToPropsでstoreの変更をおこなったとする。
// そうすると、カレンダーの予定の変更をおこなっただけで、カレンダーの日付生成が行われる
// それだと同じ処理を頻繁におこなってしまうため、mergePropsを用いる
// これだと、予定の変更をおこなっても、カレンダーの日付生成はされず、処理が重くならずすむ
// -------------------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBoard);