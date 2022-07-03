import { connect } from "react-redux";
import { createCalendar } from "../../services/calendar";
import CalendarBoard from "./presentation";

// stateから必要な情報を抜き出してpropsに伝える
const mapStateToProps = state => ({calendar: state.calendar});

const mergeProps = (stateProps, dispatchProps) => {
    console.log(stateProps)
    
    return ({
    month: stateProps.calendar,
    calendar: createCalendar(stateProps.calendar)
})};

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

export default connect(mapStateToProps, null, mergeProps)(CalendarBoard);