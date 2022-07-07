import React from "react";

import { Typography, Box ,Stack } from "@mui/material";
import Schedule from "../Schedule";

import dayjs from "dayjs";

import { isSameDay, isSameMonth, isFirstDay, getMonth } from "../../services/calendar";

const CalendarElement = ({day, month, schedules}) => {

    // 今月以外はグレーダウン
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);
    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
    
    // 月の最初はフォーマットを変える
    const format = isFirstDay(day) ? "M月D日" : "D";
    
    // 当日は青い印をつける
    const today = dayjs();
    const isToday = isSameDay(day,today);

    return (
        <Box sx={{borderRight: 1, borderBottom: 1, height: '18vh'}}>
            <Typography
                sx={{py: 1, px: 0, height: 24}}
                color={textColor}
                align="center"
                variant="caption"
                component="div"
            >
                <Box sx={isToday ? {
                    display: "inline-block",
                    lineHeight: "24px",
                    width: "24px",
                    backgroundColor: "#1a73e8",
                    color: "#fff",
                    borderRadius: "50%"
                }: {}}>
                    {day.format(format)}
                </Box>
            </Typography>
            <Stack spacing={2} sx={{alignItems: "center"}}>
                {schedules.map(schedule => (
                    <Schedule key={schedule.id} schedule={schedule} />
                ))}
            </Stack>
        </Box>
    );
};

export default CalendarElement;