import React from 'react';
import { Typography, InputLabel, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import CustomSelect from '../../Select';

const QuestionForm = ({ control, subjects, difficultyLevels, questionTypes, errors }) => (
  <>
    <Controller
      name="subjects"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <>
          <CustomSelect label={"Subject"} {...field} options={subjects} />
          {errors.subjects && <Typography color="error" variant="caption">{errors?.subjects?.message}</Typography>}
        </>
      )}
    />
    <Controller
      name="difficulty"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <>
          <CustomSelect label={"Difficulty Level"} {...field} options={difficultyLevels} />
          {errors.difficulty && <Typography color="error" variant="caption">{errors?.difficulty?.message}</Typography>}
        </>
      )}
    />
    <Controller
      name="questionType"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <>
          <CustomSelect label={"Question Type"} {...field} options={questionTypes} />
          {errors.questionType && <Typography color="error" variant="caption">{errors?.questionType?.message}</Typography>}
        </>
      )}
    />
    <InputLabel id="demo-simple-select-label" required sx={{ fontSize: '0.7em', fontWeight: '700', mt: '0.6em' }}>
      Question
    </InputLabel>
    <Controller
      name="question"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <>
          <TextField id="outlined-basic" variant="outlined" size="small" {...field} />
          {errors.question && <Typography color="error" variant="caption">{errors?.question?.message}</Typography>}
        </>
      )}
    />
    <Typography variant="body2">
      Ensure only one checkbox is selected as the correct answer.
    </Typography>
  </>
);

export default QuestionForm;
