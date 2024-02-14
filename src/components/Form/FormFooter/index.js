import React from 'react';
import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useStyles } from './style';

const FormFooter = ({ errors, handleReset, loading }) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      {errors?.answers && <Typography variant="caption" fontWeight={900} color="error" sx={{ mt: 2 }}>{errors?.answers?.message}</Typography>}
      <Button variant='contained' sx={{ background: 'whitesmoke' }} onClick={handleReset}>
        Reset form
      </Button>
      <Button variant='contained' type="submit" color="success">
        {loading ? <CircularProgress fontSize='small' sx={{ color: 'white' }} /> : 'Submit'}
      </Button>
    </Box>
  )
}

export default FormFooter;
