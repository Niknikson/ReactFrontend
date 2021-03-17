import React from 'react'
import { deleteAC } from '../../../../../redux/todoReduser'
import { useDispatch } from 'react-redux'
import s from './todo.module.css'


const Todo = ({ todo }) => {
    const dispatch = useDispatch()
    const handelDelit = (id) => {
        dispatch(deleteAC(id))
    }
    
    return (
        <div className={s.todo}>
            <div className={s.todoTile}>{todo.title}</div>
            <button onClick={() => handelDelit(todo.id)} className={s.button}>Delet</button>
        </div>
    )
}

export default Todo
