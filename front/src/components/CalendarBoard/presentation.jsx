import React from "react";

import {Grid, Typography, Box, containerClasses} from "@mui/material"

import CalendarElement from "../CalendarElement"

const days = ["日","月","火","水","木","金","土"];

const CalendarBoard = ({calendar, month, openAddScheduleDialog}) => {

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
                {calendar.map((c) => (
                    <Grid item xs={2} key={c.toISOString()} onClick={() => openAddScheduleDialog(c)}>
                        <CalendarElement day={c} month={month} />
                    </Grid>
                ))}
            </Grid>
         </Box>
    )
};

export default CalendarBoard;