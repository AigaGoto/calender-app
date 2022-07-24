import React from "react";

import { Dialog, DialogContent, DialogActions,
     Grid, IconButton, Typography} from "@mui/material";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';
import NotesIcon from '@mui/icons-material/Notes';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';


const CurrentScheduleDialog = ({
    schedule: {item, isDialogOpen},
    closeDialog,
    deleteItem
}) => {

    return (
        <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
            <DialogActions>
                <IconButton onClick={deleteItem}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={closeDialog}>
                    <CloseIcon />
                </IconButton>
            </DialogActions>

            <DialogContent>
                {item && (
                <>
                <Grid container spacing={1} sx={{mt: 1, mb: 3, justifyContent: "space-between", alignItems: "center"}} >
                    <Grid item>
                        <CircleIcon color="secondary" fontSize="large"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography color="secondary">
                            {item.date.format("M月D日")}
                        </Typography>
                    </Grid>
                </Grid>

                {item.location && (
                <Grid container spacing={1} sx={{my: 1, justifyContent: "space-between", alignItems: "center"}} >
                    <Grid item>
                        <LocationOnIcon color="primary" fontSize="large"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography>{item.location}</Typography>
                    </Grid>
                </Grid>
                )}

                {item.description && (
                <Grid container spacing={1} sx={{my: 1, justifyContent: "space-between", alignItems: "center"}} >
                    <Grid item>
                        <NotesIcon color="primary" fontSize="large"/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography>{item.description}</Typography>
                    </Grid>
                </Grid>
                )}
                </>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default CurrentScheduleDialog