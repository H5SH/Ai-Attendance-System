import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

function Login(){

    const navigate = useNavigate()

    async function login(values){
        localStorage.setItem('user', values)
        window.location.reload()
    }

    return (
        <div className='content-center p-5'>
        <Formik
        initialValues={{
            username: '',
            password: ''
        }}
        validationSchema={Yup.object({
            username: Yup.string().required(),
            password: Yup.string().required()
        })}
        onSubmit={(values)=> login(values)}
        >
            {()=> (
                <Form>
                    <label>Username</label>
                    <Field name='username' type='text'/>
                    <ErrorMessage name='username'/>

                    <label>Password</label>
                    <Field name='password' type='password'/>
                    <ErrorMessage name='password'/>

                    <input type='submit' value='login' />

                </Form>
            )}
        </Formik>
        <button onClick={()=> navigate('/register')}>Register</button>
        </div>
    )
}

export default Login