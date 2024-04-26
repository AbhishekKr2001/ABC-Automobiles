import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


//taking  data using form which here known as formik and also set initial values    check for validataion using YUP    
//using onSubmit to submit the function and pass data to the addUser function of the fetch.js file
function AddUserForm({ addUser }) {
    return (
        <Formik
            initialValues={{
                first_name: "",
                last_name: "",
                email: "",
                country: "",
                phone: "",
                date_of_birth: ""
            }}


            validationSchema={
                Yup.object({
                    first_name: Yup.string().required('First Name is required')
                        .min(1, 'First name must be atleast 1 characters')
                        .max(17, 'First name must be atmost 17 characters'),
                    last_name: Yup.string().required('Last Name is required'),
                    email: Yup.string().email('Invalid Email Address').required('Email is required'),
                    country: Yup.string().required('Country is required'),
                    phone: Yup.string().required('phone is required'),
                    date_of_birth: Yup.date().required('DOB is required'),
                })
            }



            onSubmit={(values, { resetForm }) => {
                addUser(values);
                resetForm();
            }}>
            <Form>
                <div>
                    <label htmlFor='first_name'>First Name</label>
                    <Field type="text" name="first_name" />
                    <ErrorMessage name='first_name' component="div" />
                </div>
                <div>
                    <label htmlFor='last_name'>Last Name</label>
                    <Field type="text" name="last_name" />
                    <ErrorMessage name='last_name' component="div" />
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage name='email' component="div" />
                </div>
                <div>
                    <label htmlFor='country'>Country</label>
                    <Field type="text" name="country" />
                    <ErrorMessage name='country' component="div" />
                </div>
                <div>
                    <label htmlFor='phone'>Phone</label>
                    <Field type="text" name="phone" />
                    <ErrorMessage name='phone' component="div" />
                </div>
                <div>
                    <label htmlFor='date_of_birth'>Date of Birth</label>
                    <Field type="date" name="date_of_birth" />
                    <ErrorMessage name='date_of_birth' component="div" />
                </div>
                <button type='submit'>Add User</button>

            </Form>
        </Formik>
    )
}
export default AddUserForm;