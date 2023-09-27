import React from 'react';
import { ErrorMessage, useField } from 'formik';

export function TextField ({ test, label, ...props }){
  const [field, meta] = useField(props);
  return (
    <div className="form__item">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  );
};
