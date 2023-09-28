import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import checkEmail from '../../utils/checkEmail';
import * as Yup from 'yup';

import propTypes from 'prop-types';
import './Registration.scss'

export function RegForm({ registration }) {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        if (checkEmail(values.email)) {
          alert('Данный Email уже занят!');
        } else {
          registration(values.email, values.password);
          navigate('/');
        }
      }}
    >
      {(formik) => (
        <div className="form__wrapper">
          <h1>Sign Up</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <button className="register" type="submit">
              Register
            </button>
            <button className="reset" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
RegForm.propTypes = {
  registration: propTypes.func,
};
