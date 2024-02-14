import { createTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const app = createTheme({
  breakpoints: {
    values: {
      xs: 330,
      sm: 385,
      md: 435,
      lg: 778,
      xl: 1034,
      xxl: 1450,
    },
  },
});

export const useStyles = makeStyles((theme) => ({
  form: {
    padding: '0.5em',
    display: 'flex',
    margin: 'auto',
    marginTop: '3%',
    borderRadius: '1em',
    flexDirection: 'column',
    [app.breakpoints.down('sm')]: {
      width: '95%',
    },
    [app.breakpoints.down('md')]: {
      width: '90%',
    },
    [app.breakpoints.down('lg')]: {
      width: '80%',
    },
    [app.breakpoints.up('xl')]: {
      width: '60%',
    },
   
    background: theme.palette.mode === 'dark' ? grey[900] : 'white',
    "& .MuiTypography-body2": {
      fontWeight: '900', 
      fontSize: '0.6em',
      marginTop: '0.5em',
      color: theme.palette.mode === 'dark' ? 'white' : 'black',
    }
 },
}));

const grey = {
  900: '#1C2025',
};