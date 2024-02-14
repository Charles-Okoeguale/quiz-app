import React from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useStyles } from './style';

const CustomSelect = ({ label, value, onChange, options, name }) => {
    const classes = useStyles()
  return (
    <Box className={classes.root}>
      <InputLabel id={`select-label-${label}`} sx={{fontSize: '0.7em', fontWeight: '600'}} required>
        {label}
      </InputLabel>
      <FormControl fullWidth size='small' >
        <Select
          labelId={`select-label-${label}`}
          id={`select-${label}`}
          value={value}
          onChange={onChange}
          name={name}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};


export default CustomSelect
