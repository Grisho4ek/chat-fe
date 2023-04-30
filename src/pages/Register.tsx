import { useFormik, FormikErrors } from 'formik';
import Input from '../components/Input';

interface FormValues {
  username: string;
  password: string;
}

export default function Register() {
  const formik = useFormik<FormValues>({
    initialValues: {
      username: '',
      password: '',
    },
    validate: (values) => {
      const errors: FormikErrors<FormValues> = {};
      if (!values.username) {
        errors.username = 'Required';
      }
      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    },
    onSubmit: () => {
      console.log('yaya');
    },
  });

  return (
    <div className='flex h-screen items-center bg-blue-50'>
      <form
        className='mx-auto flex w-64 flex-col gap-2'
        onSubmit={formik.handleSubmit}
      >
        <Input
          placeholder='username'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='username'
          error={formik.touched.username && formik.errors.username}
        />
        <Input
          type='password'
          placeholder='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name='password'
          error={formik.touched.password && formik.errors.password}
        />
        <button
          className='block w-full rounded-sm bg-blue-500 p-2 text-white'
          type='submit'
        >
          Register
        </button>
      </form>
    </div>
  );
}
