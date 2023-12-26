import { useState } from 'react';
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
  PasswordVisibility,
  InputWrapper,
  PasswordWrapper,
} from './FormAut.styled';
import { emailRegexp } from 'helpers/emailRegexp';
import { ERROR_MESSAGES } from 'helpers/error-messages';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'config/firebase-config';
import { addToken } from 'redux/slice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { styleToastify } from 'components/toastify';

const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegexp, ERROR_MESSAGES.INVALID_EMAIL)
    .required(ERROR_MESSAGES.REQUIRED_EMAIL),
  password: Yup.string()
    .min(6, ERROR_MESSAGES.MIN_PASSWORD)
    .required(ERROR_MESSAGES.REQUIRED_PASSWORD),
});

export const Login = ({ onClose }) => {
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();

  const handelSubmit = async values => {
    const { email, password } = values;
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      dispatch(addToken(credentials.user.accessToken));
      onClose();
      return credentials.user;
    } catch (error) {
      toast.error(
        'Oops something went wrong, check if you entered the data correctly',
        styleToastify
      );
    }
  };

  return (
    <FormWrapper>
      <Title>Log In</Title>
      <Description>
        Welcome back! Please enter your credentials to access your account and
        continue your search for an teacher.
      </Description>
      <Formik
        initialValues={{
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
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
