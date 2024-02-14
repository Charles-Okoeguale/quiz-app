import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
 root: {
    width: '70%', 
    height: '100vh',
    margin: '3em auto', 
    display: 'flex', 
    flexDirection: 'column',
    [theme.breakpoints.down('md')]: {
        width: '90%'
    }, 
    "& .MuiButton-contained": {
        whiteSpace: 'nowrap', 
        fontWeight: '900', 
        marginBottom: '2em', 
        textTransform: 'none', 
        background: 'green', 
        width: '10em', 
        alignSelf: 'end',
        [theme.breakpoints.down('md')]: {
            fontSize: '0.6em'
        }, 
    },
    "& .MuiTypography-caption": {
        alignSelf: 'center',
        color: theme.palette.mode === 'dark' ? 'white' : 'black',
    },
    "& .MuiTypography-body2": {
        alignSelf: 'center',
        color: theme.palette.mode === 'dark' ? 'white' : 'black',
    }
 }
}));
