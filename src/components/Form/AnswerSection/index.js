import React from 'react';
import { Grid, InputLabel, OutlinedInput, Typography, Checkbox } from '@mui/material';
import { Controller } from 'react-hook-form';

const AnswerSection = ({ control, answers, setAnswers, selectedCheckbox, handleSelect, errors, numberofanswers }) => {
  return (
    <Grid container spacing={2} mt={'0.3em'}>
    {Array.from({ length: numberofanswers }).map((_, index) => (
      <Grid item xs={12} sm={6} key={index}>
        <InputLabel id={`answer-label-${index}`} htmlFor={`checkbox-${index}`} required sx={{ fontSize: '0.7em', fontWeight: '700' }}>
          Answer {index + 1}
        </InputLabel>
        <Controller
          name={`answers[${index}].text`}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <>
              <OutlinedInput
                {...field}
                id={`outlined-adornment-weight-${index}`}
                size="small"
                value={answers[index].text || field.value}
                onChange={(e) => {
                  const updatedAnswers = [...answers];
                  updatedAnswers[index].text = e.target.value;
                  setAnswers(updatedAnswers);
                  field.onChange(e);
                }}
              />
            </>
          )}
        />
        <Controller
          name={`answers[${index}].isChecked`}
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <>
              <Checkbox
                {...field}
                id={`checkbox-${index}`}
                color='success'
                checked={field.value}
                disabled={selectedCheckbox !== null && selectedCheckbox !== index}
                onChange={() => handleSelect(index, field)}
              />
              {errors.answers && errors.answers[index] && errors.answers[index].text && (
                <Typography variant="caption" color="error">{errors?.answers[index]?.text?.message}</Typography>
              )}
            </>
          )}
        />
      </Grid>
    ))}
  </Grid>
  )
}

export default AnswerSection;
