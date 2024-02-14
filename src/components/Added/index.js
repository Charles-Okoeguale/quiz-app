import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useStyles } from './style';

const QuizAddedMessage = ({ setAdded}) => {
  const classes = useStyles()
    const addNewQuiz = () => {
        setAdded(false)
    }
  return (
    <Box className={classes.root}>
      <Button variant="contained" onClick={addNewQuiz}>
        Add new Quiz
      </Button>
      <CheckCircleIcon sx={{ fontSize: '4em', color: 'green', alignSelf: 'center' }} />
      <Typography variant="body2" fontWeight={900}>
        Quiz Added
      </Typography>
      <Typography variant="caption">
        Form data has been logged to the console
      </Typography>
    </Box>
  );
};

export default QuizAddedMessage;
