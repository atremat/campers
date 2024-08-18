import css from './BookForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import clsx from 'clsx';
import Icon from '../Icon/Icon';

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  date: Yup.date(),
  comment: Yup.string()
    .min(3, 'Too short')
    .max(256, 'Too long')
    .required('Required'),
});

const initialValues = {
  username: '',
  email: '',
  message: '',
  date: null,
};

const DatePickerField = ({ field, form, placeholder, ...props }) => {
  return (
    <DatePicker
      {...field}
      {...props}
      placeholderText={placeholder}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        form.setFieldValue(field.name, val);
      }}
    />
  );
};

export const BookForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const dateFieldId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <div className={css.container}>
      <h4 className={css.title}>Book your campervan now</h4>

      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <div className={css.nameWrapper}>
            <Field
              type="text"
              name="username"
              id={nameFieldId}
              placeholder="Name"
              className={clsx(css.username, css.field)}
            />
            <ErrorMessage name="username" component="span" />
          </div>

          <div className={css.emailWrapper}>
            <Field
              type="email"
              name="email"
              id={emailFieldId}
              placeholder="Email"
              className={clsx(css.email, css.field)}
            />
            <ErrorMessage name="email" component="span" />
          </div>

          <div className={css.dateWrapper}>
            <label htmlFor={dateFieldId}>
              <Field
                name="date"
                component={DatePickerField}
                id={dateFieldId}
                placeholder="Booking date"
                className={clsx(css.date, css.field)}
              />
              <Icon
                id="calendar"
                className={css.calendarIcon}
                width={16}
                height={16}
                fillColor="#101828"
              />
              <ErrorMessage name="date" component="span" />
            </label>
          </div>

          <div className={css.commentWrapper}>
            <Field
              as="textarea"
              name="comment"
              id={msgFieldId}
              placeholder="Comment"
              className={clsx(css.comment, css.field)}
            />
            <ErrorMessage name="comment" component="span" />
          </div>

          <button type="submit" className={css.button}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
