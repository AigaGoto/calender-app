import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import {addScheduleCloseDialog, addScheduleCloseStartEdit, addScheduleSetValue} from "../../redux/addSchedule/actions"
import {schedulesAddItem} from "../../redux/schedules/actions"
import { asyncSchedulesAddItem } from "../../redux/schedules/effects";

const mapStateToProps = state => ({
    schedule: state.addSchedule
});

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
    },
    saveSchedule: schedule => {
        dispatch(asyncSchedulesAddItem(schedule));
        dispatch(addScheduleCloseDialog());
    },
    setIsEditStart: () => {
        dispatch(addScheduleCloseStartEdit());
    }
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveSchedule: () => {
        const {
            schedule: {form: schedule}
        } = stateProps;
        dispatchProps.saveSchedule(schedule);
    }
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AddScheduleDialog)