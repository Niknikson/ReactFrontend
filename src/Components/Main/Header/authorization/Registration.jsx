import React from 'react'
import s from './styles.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {schema} from './yupValidation'

// const schema = yup.object().shape({
//     firstName: yup.string().required("First Name should be required please"),
//     lastName: yup.string().required("First Name should be required please"),
//     email: yup.string().email().required("First Name should be required please"),
//     password: yup.string().min(4).max(15).required("First Name should be required please"),
//     confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
// });


const Registration = () => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });


    
    const submitForm = (data) => {
        console.log(data);
    };

    return (
        <div className={s.container}>   
            <div className={s.formRegistration} >
                <h1 className={s.title}>Registration </h1>
                <form onSubmit={handleSubmit((d) => submitForm(d))}>
                    <div className={`${s.inputs} ${s.form} ${s.err}`}>
                        
                            <input
                            type="text"
                            name="firstName"
                            placeholder="First Name..."
                            ref={register}
                        /><p>{errors.firstName?.message}</p>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name..."
                            ref={register} 
                        />  <p> {errors.lastName?.message} </p>
                       
                        <input
                            type="text"
                            name="email"
                            placeholder="Email..."
                            ref={register}
                        /><p>{errors.email?.message} </p>
                        
                        {/* <input
                            type="text"
                            name="phone"
                            placeholder="Phone number..."
                            ref={register}
                        />  <p> {errors.phone?.message} </p> */}
                        
                        <input
                            type="password"
                            name="password"
                            placeholder="Password..."
                            ref={register}  
                        /><p> {errors.password?.message} </p>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password..."
                            ref={register}
                        /><p > {errors.confirmPassword && "Passwords Should Match!"} </p>
                        <button className={s.button} type="submit" id="submit">Registration</button>
                        </div>
                    </form>
                
            </div>
        </div>
    )
}

export default Registration
