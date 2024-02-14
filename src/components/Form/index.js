import React, { useEffect, useState } from "react";
import { Box } from "@mui/material"
import { useStyles } from "./style"
import { useForm } from 'react-hook-form';
import { difficultyLevels, questionTypes, subjects } from "../../constants";
import AnswerSection from "./AnswerSection";
import QuestionForm from "./QuestionForm"
import FormFooter from "./FormFooter";


const Form = ({setAdded}) => {
    const classes = useStyles()
    const [numberofanswers, setNumberofanswers] = useState(4)
    const [loading, setLoading] = useState(false)
    const [answers, setAnswers] = useState(Array.from({ length: numberofanswers }).map(() => ({ text: '', isChecked: false })));
    const [selectedCheckbox, setSelectedCheckbox] = useState(null);

    const { control, handleSubmit, unregister, setValue, clearErrors, register, watch, formState: { errors, defaultValues } } = useForm({
      criteriaMode: 'all',
      defaultValues: {
        subjects: '',
        difficulty: '',
        questionType: '',
        question: '',
        answers: Array.from({ length: numberofanswers }).map(() => ({ text: '', isChecked: false })),
      },
    });
  

    const watchQuestionType = watch('questionType');

    useEffect(() => {
      if (watchQuestionType === 'True/False'){
        setNumberofanswers(2)
      } 
      if (watchQuestionType === 'Multiple Options') {
        setNumberofanswers(4)
      }
    }, [watchQuestionType]);
    
    useEffect(() => {
      for (let i = numberofanswers; i < 4; i++) {
        unregister(`answers[${i}].text`);
        unregister(`answers[${i}].isChecked`);
      }

      for (let i = 2; i < numberofanswers; i++) {
        register(`answers[${i}].text`);
        register(`answers[${i}].isChecked`);
      }
    }, [numberofanswers, unregister, register]);


    useEffect(() => {
      register('subjects', { required: 'Subject is required' });
      register('difficulty', { required: 'Difficulty Level is required' });
      register('questionType', { required: 'Question Type is required' });
      register('question', { required: 'Question is required' });
      register('answers', {
        validate: (answers) => {
          const isChecked = answers.some((answer) => answer.isChecked);
          return isChecked || 'Please select one correct answer.';
        },
      });
  
      Array.from({ length: numberofanswers }).forEach((_, index) => {
        register(`answers[${index}].text`, { required: `required` });
      });

    }, [register, numberofanswers]);

    const onSubmit = (data) => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setAdded(true)
      }, 1000)
      console.log('clicked', data)
    };

    const handleReset = () => {
      // Check if defaultValues is not null or undefined
      if (defaultValues) {
        Object.keys(defaultValues).forEach((fieldName) => {
          setValue(fieldName, defaultValues[fieldName]);
        });
      }
    
      // Check if errors is not null or undefined
      if (errors) {
        Object.keys(errors).forEach((fieldName) => {
          clearErrors(fieldName);
        });
      }
    
      Array.from({ length: numberofanswers }).forEach((_, index) => {
        setValue(`answers[${index}].text`, '');
        setValue(`answers[${index}].isChecked`, false);
      });
    
      setSelectedCheckbox(null);
    
      const initialAnswers = Array.from({ length: numberofanswers }).map(() => ({ text: '', isChecked: false }));
      setAnswers(initialAnswers);
    };
    
    

    const handleSelect = (index, field) => {
      if (selectedCheckbox === null) {
        setSelectedCheckbox(index);
        field.onChange(!field.value);
      } else {
        if (selectedCheckbox === index) {
          setSelectedCheckbox(null);
          field.onChange(!field.value);
        }
      }
    };
    return (
        <Box className={classes.form}>
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit(onSubmit)} noValidate>
            <QuestionForm 
              control={control} 
              subjects={subjects} 
              difficultyLevels={difficultyLevels} 
              questionTypes={questionTypes} 
              errors={errors} 
            />
            <AnswerSection
              control={control}
              answers={answers}
              setAnswers={setAnswers}
              selectedCheckbox={selectedCheckbox}
              handleSelect={handleSelect}
              errors={errors}
              numberofanswers={numberofanswers}
            />
             <FormFooter
              errors={errors} 
              handleReset={handleReset} 
              loading={loading} 
            />
          </form>
        </Box>
    )
}

export default Form;