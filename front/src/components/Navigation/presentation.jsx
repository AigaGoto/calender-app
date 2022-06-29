import React from "react";

import { IconButton, Toolbar, Typography } from "@mui/material";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Navigation = () => {
    return (
        <Toolbar>
            <IconButton>
                <DehazeIcon />
            </IconButton>
            <img src="/images/calendar_icon.png" alt="calendar icon" width="40" height="40" />
            <Typography color="textScondary" variant="h5" component="h1">
                カレンダー
            </Typography>
            <IconButton size="small">
                <ArrowBackIosIcon />
            </IconButton>
            <IconButton size="small">
                <ArrowForwardIosIcon />
            </IconButton>
        </Toolbar>
    )
};

export default Navigation;