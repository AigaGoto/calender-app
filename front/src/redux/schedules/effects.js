import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem, schedulesDeleteItem } from "./actions";
import {deleteRequest, get, post} from "../../services/api"
import {formatSchedule} from "../../services/schedule";

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

export const asyncScheduleDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    const currentSchedules = getState().schedules.items;

    // サーバー内での削除
    await deleteRequest(`schedules/${id}`);

    // フロント上での削除
    const newSchedule = currentSchedules.filter(s => s.id !== id)
    dispatch(schedulesDeleteItem(newSchedule))
}