import React, {useEffect} from "react";

import {Grid, Typography, Box, containerClasses} from "@mui/material"

import CalendarElement from "../CalendarElement"

const days = ["日","月","火","水","木","金","土"];

const CalendarBoard = ({calendar, month, schedules, 
    openAddScheduleDialog, 
    openCurrentScheduleDialog,
    fetchSchedule,
 }) => {

    useEffect(() => {
        fetchSchedule();
    }, [])

    return (
        <Box sx={{height: '90vh'}}>
            <Grid container sx={{borderTop: 1, borderLeft: 1}} spacing={0} columns={14} >
                {days.map(d => (
                    <Grid item xs={2} key={d}>
                        <Typography
                            sx={{pt: 1.25, borderRight: 1, color: "text.secondary", }}
                            align="center"
                            variant="caption"
                            component="div"    
                        >
                            {d}
                        </Typography>
                    </Grid>
                ))}
                {calendar.map(({date, schedules}) => (
                    <Grid 
                        item 
                        xs={2} 
                        key={date.toISOString()} 
                        onClick={() => openAddScheduleDialog(date)}
                    >
                        <CalendarElement 
                            day={date} 
                            month={month} 
                            schedules={schedules} 
                            onClickSchedule={openCurrentScheduleDialog}/>
                    </Grid>
                ))}
            </Grid>
         </Box>
    )
};

export default CalendarBoard;