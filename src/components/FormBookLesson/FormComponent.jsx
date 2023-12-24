import * as Yup from 'yup';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { emailRegexp } from 'helpers/emailRegexp';
import { TextMaskCustom } from 'helpers/numberMaskCustom';
import { Formik } from 'formik';
import {
  FormTitle,
  Form,
  Button,
  WrapperInput,
  ErrorMessage,
} from './BookLesson.styled';

const options = [
  { name: 'Career and business', id: '1' },
  { name: 'Lesson for kids', id: '2' },
  { name: 'Living abroad', id: '3' },
  { name: 'Exams and coursework', id: '4' },
  { name: 'Culture, travel or hobby', id: '5' },
];

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Name must contain at least 3 characters')
    .max(50, 'Too Long!')
    .required('Name required'),
  email: Yup.string()
    .matches(emailRegexp, `This is an ERROR email`)
    .required(`Email required`),
  number: Yup.string()
    .min(17, 'This is an ERROR phone number (Ukrainian format)')
    .required(`Enter the phone number in Ukrainian format`),
});

export const FormComponent = () => {
  const handelSubmit = values => {
    console.log(values);
  };

  return (
    <FormControl>
      <FormTitle>What is your main reason for learning English?</FormTitle>
      <Formik
        initialValues={{
          email: '',
          fullName: '',
          number: '',
          lesson: options[0].name,
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
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={values.lesson}
              onChange={handleChange}
              name="radio-buttons-group"
              className="radio_group"
            >
              {options.map(({ name, id }) => (
                <FormControlLabel
                  key={id}
                  value={name}
                  name="lesson"
                  control={
                    <Radio
                      sx={{
                        color: '#12141733',
                        '&.Mui-checked': {
                          color: '#F4C550',
                        },
                      }}
                    />
                  }
                  label={name}
                />
              ))}
            </RadioGroup>
            <div>
              <WrapperInput>
                <input
                  type="text"
                  name="fullName"
                  onBlur={handleBlur}
                  placeholder="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && touched.fullName ? (
                  <ErrorMessage>* {errors.fullName}</ErrorMessage>
                ) : null}
              </WrapperInput>
              <WrapperInput>
                <input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <ErrorMessage>* {errors.email}</ErrorMessage>
                ) : null}
              </WrapperInput>
              <WrapperInput>
                <TextMaskCustom
                  type="tel"
                  name="number"
                  onBlur={handleBlur}
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={values.number}
                />
                {errors.number && touched.number ? (
                  <ErrorMessage>* {errors.number}</ErrorMessage>
                ) : null}
              </WrapperInput>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Book
            </Button>
          </Form>
        )}
      </Formik>
    </FormControl>
  );
};
