import { connect } from "react-redux";
import AddScheduleDialog from "./presentation";
import {addScheduleCloseDialog, addScheduleSetValue} from "../../redux/addSchedule/actions"

const mapStateToProps = state => ({
    schedule: state.addSchedule
});

const mapDispatchToProps = dispatch => ({
    closeDialog: () => {
        dispatch(addScheduleCloseDialog());
    },
    setSchedule: value => {
        dispatch(addScheduleSetValue(value));
    }
});

const mergeProps = (mapStateToProps, mapDispatchToProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps, null)(AddScheduleDialog)