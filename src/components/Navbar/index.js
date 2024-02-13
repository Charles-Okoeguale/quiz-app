import { Box, Typography } from "@mui/material"
import { Root, useStyles } from "./style"
import InterestsIcon from '@mui/icons-material/Interests';
import { Dropdown } from '@mui/base/Dropdown';
import { Switch } from '@mui/base/Switch';
import { useContext } from "react";
import { Context } from "../../App";

const Navbar = () => {
    const classes = useStyles()
    const {setMode, mode} = useContext(Context)
    const label = { slotProps: { input: { 'aria-label': 'Demo switch' } } };
    const toggleDarkMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };
    return (
        <Box className={classes.root}>
            <InterestsIcon fontSize="large" sx={{ color: '#008c3a',}}/>
            <Typography variant="h5" fontWeight={900}>Quiz App</Typography>
            <Dropdown>
            <Switch slots={{root: Root}} {...label} onChange={toggleDarkMode} checked={mode === 'dark'} />
            </Dropdown>
        </Box>
    )
}

export default Navbar