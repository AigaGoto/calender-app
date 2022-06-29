import React from "react";

import {Grid, Typography} from "@mui/material"
import * as styles from "./style.css"

import CalendarElement from "../CalendarElement"

const days = ["日","月","火","水","木","金","土"];

const CalendarBoard = ({calendar}) => {

    console.log(calendar);

    return (
        <div className={styles.container}>
            <Grid container  spacing={0} columns={14} >
                {days.map(d => (
                    <Grid item xs={2} key={d}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"    
                        >
                            {d}
                        </Typography>
                    </Grid>
                ))}
                {calendar.map((c) => (
                    <Grid item xs={2} key={c.toISOString()}>
                        <CalendarElement day={c} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default CalendarBoard;