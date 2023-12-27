import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { FiEyeOff, FiEye } from 'react-icons/fi';
import {
  Description,
  ErrorMessage,
  Form,
  FormWrapper,
  Input,
  Title,
  Button,
  InputWrapper,
  PasswordVisibility,
  PasswordWrapper,
} from './FormAut.styled';
import { emailRegexp } from 'helpers/emailRegexp';
import { ERROR_MESSAGES } from 'helpers/error-messages';
import { auth } from 'config/firebase-config';
import { useDispatch } from 'react-redux';
import { addToken } from 'redux/sliceAuth';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, ERROR_MESSAGES.MIN_NAME)
    .max(50, ERROR_MESSAGES.MAX_NAME)
    .required(ERROR_MESSAGES.REQUIRED_NAME),
  email: Yup.string()
    .matches(emailRegexp, ERROR_MESSAGES.INVALID_EMAIL)
    .required(ERROR_MESSAGES.REQUIRED_EMAIL),
  password: Yup.string()
    .min(6, ERROR_MESSAGES.MIN_PASSWORD)
    .required(ERROR_MESSAGES.REQUIRED_PASSWORD),
});

export const Register = ({ onClose }) => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const handelSubmit = async values => {
    const { email, password } = values;
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // await addDoc(collection(db, 'users'), {
      //   name,
      //   email,
      //   id: result.user.uid,
      // });

      dispatch(addToken(result.user.accessToken));
      onClose();
      return result;
    } catch (error) {
      throw error;
    }
  };

  return (
    <FormWrapper>
      <Title>Registration</Title>
      <Description>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Description>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handelSubmit}
      >
        {({
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          handleBlur,
          handleChange,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <ErrorMessage>* {errors.name}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <ErrorMessage>* {errors.email}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <PasswordWrapper>
                <Input
                  name="password"
                  type={visibility ? 'text' : 'password'}
                  placeholder="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <PasswordVisibility
                  type="button"
                  onClick={() => setVisibility(!visibility)}
                >
                  {visibility ? <FiEyeOff /> : <FiEye />}
                </PasswordVisibility>
              </PasswordWrapper>
              {errors.password && touched.password ? (
                <ErrorMessage>* {errors.password}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
