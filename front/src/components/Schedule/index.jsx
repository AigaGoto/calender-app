import React from "react";

import { Paper } from "@mui/material";
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(() => ({
  backgroundColor: 'rgb(121, 134, 203)',
  textAlign: 'center',
  color: '#fff',
  borderRadius: "4px",
  padding: "1px 4px",
  width: "85%",
  fontSize: "14px"
}));

const Schedule = ({schedule}) => {
    return (
        <Item>{schedule.title}</Item>
    )
}

export default Schedule;