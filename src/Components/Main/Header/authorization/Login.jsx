import React, { useState, useEffect} from 'react'
import s from './styles.module.css'

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true)
    const [minLength, setMinLength] = useState(false)
    const [emailError, setIsEmail] = useState(false)

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLength(true) : setMinLength(false)
                    break;
                case 'isEmpty':
                   value ? setIsEmpty(false) : setIsEmpty(true)
                    break;
                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setIsEmail(false) : setIsEmail(true)
                    break;
            }
        }
    }, [value])
    return {
        isEmpty,
        minLength,
        emailError,
    }
}


const useInput = (initialValu, validations) => {
    const [value, setValue] = useState(initialValu)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e) => {
        setValue(e.target.value)
    }
    const onBlur = e => {
        setDirty(true)
    } 
    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
}


const Login = () => {
    const email = useInput('', {isEmpty:true, minLength: 3, isEmail:true})
    const password = useInput('', { isEmpty: true, minLength: 6 })
    
    return (
        <div className={s.container}>
            <div className={s.formLogin} >
                <h1 className={s.title}>Login </h1>
                <form  >
                    <div className={`${s.inputs} ${s.form}`}>
                        <input
                            onChange={(e) => { email.onChange(e)}}  
                            onBlur={(e) => { email.onBlur(e) }}
                            value={email.value}
                            type="text"
                            name="email"
                            placeholder="Email..."
                        />
                        <div>{(email.isDirty && email.isEmpty) && <p style={{ color: 'red' }}>Ведіть будь-ласка логін</p>}
                             {(email.isDirty && email.minLength) && <p style={{ color: 'red' }}>Мінімум символів 3</p>}
                            {(email.isDirty && email.emailError) && <p style={{ color: 'red' }}>Невірний email</p>}</div>
                        <input
                            onChange={(e) => { password.onChange(e)}}
                            onBlur={(e) => { password.onBlur(e)}}
                            value={password.value}
                            type="password"
                            name="password"
                            placeholder="Password..."
                        />{(password.isDirty && password.isEmpty) && <p style={{ color: 'red' }}>Ведіть будь-ласка пароль</p>}
                        
                        <button className={s.button} type="submit" id="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Login
