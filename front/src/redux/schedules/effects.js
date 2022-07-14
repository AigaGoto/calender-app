import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem } from "./actions";
import {get, post} from "../../services/api"
import {formatSchedule} from "../../services/schedule";
import { getCheckboxUtilityClass } from "@mui/material";

export const asyncSchedulesFetchItem = ({month, year}) => async dispatch => {
    dispatch(schedulesSetLoading());

    const result = await get(`schedules?month=${month}&year=${year}`);

    const formatedSchedule = result.map(r => formatSchedule(r));
    dispatch(schedulesFetchItem(formatedSchedule));
}

export const asyncSchedulesAddItem = schedule => async dispatch => {
    // loadingをtrueにする
    dispatch(schedulesSetLoading());

    const body = {...schedule, date: schedule.date.toISOString()};
    const result = await post("schedules", body);

    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
}

export const deleteRequest = async path => {
    const options = {method: "DELETE"};

    await fetch(utl(path), options);

    return
}