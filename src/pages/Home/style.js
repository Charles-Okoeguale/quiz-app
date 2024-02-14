import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    background: theme.palette.mode === 'dark' ? 'black' : 'lightgrey',
  },
}));

