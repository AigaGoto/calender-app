import React from "react";

import * as styles from './style.css';

import { Typography } from "@mui/material";

import dayjs from "dayjs";

import { isSameDay, isSameMonth, isFirstDay } from "../../services/calendar";

const CalendarElement = ({day}) => {

    const today = dayjs();

    // 今月以外はグレーダウン
    const isCurrentMonth = isSameMonth(day, today);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    // 月の最初はフォーマットを変える
    const format = isFirstDay(day) ? "M月D日" : "D";

    // 当日は青い印をつける
    const isToday = isSameDay(day,today);

    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                color={textColor}
                align="center"
                variant="caption"
                component="div"
            >
                <span className={isToday ? styles.today: ""}>
                    {day.format(format)}
                </span>
            </Typography>
        </div>
    );
};

export default CalendarElement;