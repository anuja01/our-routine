import React from 'react';
import { TextField, Button, Box, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import AddIcon from '@mui/icons-material/Add';

const AddRoutine: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    routineName: Yup.string().required('Routine name is required!'),
    routineSteps: Yup.array()
      .of(Yup.string().required('Step is required!'))
      .required('At least one step is required!'),
  });

  const initialValues = {
    routineName: '',
    routineSteps: [''],
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <h2>Add Routine</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          //TODO
          alert(`Feature in progress, Thank you!`);
          console.info(values)
          navigate('/');
        }}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              label="Routine Name"
              variant="outlined"
              name="routineName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.routineName}
              fullWidth
              margin="normal"
              error={touched.routineName && Boolean(errors.routineName)}
              helperText={touched.routineName && errors.routineName}
            />
            <FieldArray name="routineSteps">
              {({ push, remove }) => (
                <>
                  {values.routineSteps.map((step, index) => (
                    <Box key={index} display="flex" alignItems="center" marginBottom={1}>
                      <Field
                        as={TextField}
                        label={`Step ${index + 1}`}
                        variant="outlined"
                        name={`routineSteps.${index}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={step}
                        fullWidth
                        margin="normal"
                        error={touched.routineSteps && Boolean(errors.routineSteps?.[index])}
                        helperText={touched.routineSteps && errors.routineSteps?.[index]}
                      />
                      <IconButton
                        onClick={() => remove(index)}
                        color="secondary"
                        aria-label="remove step"
                      >
                        -
                      </IconButton>
                    </Box>
                  ))}
                  <Button
                    type="button"
                    variant="outlined"
                    startIcon={<AddIcon />}
                    onClick={() => push('')}
                  >
                    Add Step
                  </Button>
                </>
              )}
            </FieldArray>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginLeft: '20px' }}
            >
              Save Routine
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddRoutine;
