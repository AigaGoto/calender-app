import React from "react";

import { IconButton, Toolbar, Typography, TextField } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DehazeIcon from '@mui/icons-material/Dehaze';

import {DatePicker} from '@mui/x-date-pickers';

const Navigation = ({setPreviousMonth, setNextMonth, setMonth, month}) => {


    return (
        <Toolbar>
            <IconButton sx={{m: 1}}>
                <DehazeIcon />
            </IconButton >
            <img src="/images/calendar_icon.png" alt="calendar icon" width="40" height="40" />
            <Typography sx={{mx: 4, color: "textScondary"}}  variant="h5" component="h1">
                カレンダー
            </Typography>
            <IconButton size="small" sx={{m: 1}} onClick={setPreviousMonth}>
                <ArrowBackIosIcon />
            </IconButton>
            <IconButton size="small" sx={{m: 1}} onClick={setNextMonth}>
                <ArrowForwardIosIcon />
            </IconButton>
            <DatePicker 
                value={month}
                onChange={setMonth}
                inputFormat='YYYY年M月'
                disableMaskedInput
                renderInput={(params) => {
                    params.inputProps.readOnly = true;
                    return (<TextField {...params} sx={{maxWidth: 150}} variant='standard'  />
                )}}
            />
        </Toolbar>
    )
};

export default Navigation;