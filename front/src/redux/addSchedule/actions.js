export const ADD_SCHEDULE_SET_VALUE = "ADD_SCHEDULE_SET_VALUE";
export const ADD_SCHEDULE_OPEN_DIALOG = "ADD_SCHEDULE_OPEN_DIALOG";
export const ADD_SCHEDULE_CLOSE_DIALOG = "ADD_SCHEDULE_CLOSE_DIALOG";
export const ADD_SCHEDULE_START_EDIT = "ADD_SCHEDULE_START_EDIT";

export const addScheduleSetValue = payload => ({
    type: ADD_SCHEDULE_SET_VALUE,
    payload: payload
});

export const addScheduleOpenDialog = () => ({
    type: ADD_SCHEDULE_OPEN_DIALOG,
});

export const addScheduleCloseDialog = () => ({
    type: ADD_SCHEDULE_CLOSE_DIALOG,
});

export const addScheduleCloseStartEdit = () => ({
    type: ADD_SCHEDULE_START_EDIT,
});