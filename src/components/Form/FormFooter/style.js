import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        justifyContent: 'right', 
        marginTop: '3em',
        gap: '0.7em',
        "& .MuiButton-contained": {
            color: 'black', 
            textTransform: 'none', 
            fontWeight: '900',
            height: '3em'
        }
    }
}));