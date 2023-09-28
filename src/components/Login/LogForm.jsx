import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

import propTypes from 'prop-types';
import './Login.scss'

export function LogForm({ login }) {
  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  });
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        if (login(values.email, values.password)) {
          navigate('/');
        } else {
          alert('Неверный логин или пароль')
        }
      }}
    >
      {(formik) => (
        <div className="form__wrapper">
          <h1>Sign In</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="register" type="submit">
              Login
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
LogForm.propTypes = {
  login: propTypes.func,
};
