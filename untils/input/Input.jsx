import React from 'react'
import s from './input.module.css'

const Input = (props) => {
    return (
        <input
            onChange={e => props.setValue(e.target.value)}
            className={s.input}
            value={props.value}
            type={props.type}
            placeholder={props.placeholder} />

    )
}

export default Input
