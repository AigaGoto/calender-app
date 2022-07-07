import React from "react";

import { Dialog, DialogContent, DialogActions,
    TextField, Button, Grid, Input, IconButton} from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotesIcon from '@mui/icons-material/Notes';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CloseIcon from '@mui/icons-material/Close';

import {DatePicker} from '@mui/x-date-pickers';


const AddScheduleDialog = ({
    schedule: {
        form: {title, location, description, date},
        isDialogOpen
    }, 
    closeDialog,
    setSchedule,
    saveSchedule,
}) => {

    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth={true}>
            <DialogActions>
                <IconButton onClick={closeDialog}>
                    <CloseIcon />
                </IconButton>
            </DialogActions>
            <DialogContent>
                <Input 
                    autoFocus 
                    fullWidth 
                    placeholder="タイトルと日時を追加" 
                    margin="dense"
                    sx={{fontSize: 24, mb: 4}}
                    value={title}
                    onChange={e => setSchedule({title: e.target.value})}
                />
                <Grid container spacing={1} sx={{my: 1, justifyContent: "space-between", alignItems: "center"}} >
                    <Grid item>
                        <AccessTimeIcon color="primary" fontSize="large"/>
                    </Grid>
                    <Grid item xs={10}>
                        <DatePicker 
                            value={date}
                            onChange={d => setSchedule({date: d})}
                            inputFormat='YYYY年M月D日'
                            disableMaskedInput
                            renderInput={(params) => {
                                params.inputProps.readOnly = true;
                                return (<TextField {...params} sx={{maxWidth: 150}} variant='standard' />
                            )}}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{my: 1, justifyContent: "space-between", alignItems: "center"}} >
                    <Grid item>
                        <LocationOnIcon color="primary" fontSize="large"/>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                            label="場所を追加"
                            fullWidth
                            variant="standard"
                            value={location}
                            onChange={e => setSchedule({location: e.target.value})}
                         />
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{my: 1, justifyContent: "space-between", alignItems: "center"}} >
                    <Grid item>
                        <NotesIcon color="primary" fontSize="large"/>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField 
                            label="詳細を追加"
                            fullWidth
                            variant="standard"
                            value={description}
                            onChange={e => setSchedule({description: e.target.value})}
                         />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={closeDialog}>キャンセル</Button>
                <Button onClick={saveSchedule}>保存</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddScheduleDialog;