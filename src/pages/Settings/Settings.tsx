import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Settings: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required('Kid\'s name is required!'),
    age: Yup.number()
      .required('Kid\'s age is required!')
      .positive('Age must be a positive number!')
      .integer('Age must be an integer!'),
  });

  const initialValues = {
    name: localStorage.getItem('kidName') || '',
    age: localStorage.getItem('kidAge') || '',
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <h2>Settings</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          localStorage.setItem('kidName', values.name);
          localStorage.setItem('kidAge', values.age);
          alert('Data saved successfully!');
          navigate('/');
        }}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              label="Kid's Name"
              variant="outlined"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              fullWidth
              margin="normal"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <Field
              as={TextField}
              label="Kid's Age"
              variant="outlined"
              name="age"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.age}
              fullWidth
              margin="normal"
              error={touched.age && Boolean(errors.age)}
              helperText={touched.age && errors.age}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: '20px' }}
            >
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default Settings;
