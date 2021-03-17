import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodoAC } from '../../../../redux/todoReduser'
import s from '../header.module.css'

const InputTodo = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const addTodo = (e) => {
        e.preventDefault()
        dispatch(createTodoAC({
            id: Date.now(),
            title: name,}))
        setName('')
    }

    return (
       <div className={s.inputContent}>
            <input
                className={s.input}
                type='text'
                onChange={(e) => setName(e.currentTarget.value)}
                value={name}
                placeholder='Add todo'
            />
            <button
                className={s.btnInput}
                onClick={addTodo}
            >Add</button>
        </div>
    )
}

export default InputTodo