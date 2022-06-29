import dayjs from "dayjs";

import { CALENDAR_SET_MONTH } from "./action";

const day = dayjs();

const init = {
    year: day.year(),
    month: day.month() + 1 //month は 0~11
};

export const calendarReducer = (state = init, action) => {
    const {type, payload} = action;
    switch (type) {
        case CALENDAR_SET_MONTH:
            return payload;
        default:
            return state;
    }
}