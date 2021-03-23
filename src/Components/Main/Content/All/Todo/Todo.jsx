import React from 'react'
import { deleteAc, upDateTodoAc, checkTodoAc} from '../../../../../redux/todoReduser'
import { useDispatch } from 'react-redux'
import s from './todo.module.css'
import { useState } from 'react'


const Todo = ({ todo }) => {
    console.log('render')
    const [checkTodo, setCheckTodo] = useState(todo.completed)
    const [upDateTodo, setUpDateTodo] = useState(todo.title)
    const [editMode, setEditMode] = useState(false)
    const dispatch = useDispatch()

    const acitvate = () => {
        setEditMode(true)
    }
    const hendelUpDateTodo = (id) => {
        setEditMode(false)
        dispatch(upDateTodoAc(id, upDateTodo))
    }
    const onChangeTodo = (e) => {
        debugger
        setUpDateTodo(e.currentTarget.value) 
    }
    const onCheckTodo = (e, id) => {
        setCheckTodo(!checkTodo)
        dispatch(checkTodoAc(id))
    }
    const handelDelit = (id) => {
        dispatch(deleteAc(id))
    }
    
    return (
        <div className={s.todo}>
            {!editMode &&
                <div onDoubleClick={acitvate}
                    className={s.todoTile}>{todo.title}</div>}
            {editMode &&
                <input
                onChange={onChangeTodo}
                value={upDateTodo}
                autoFocus={true}
                onBlur={() => hendelUpDateTodo(todo.id)}
                type="text" />}
            <div>
                <input
                    className={s.checkBox}
                    type="checkbox"
                    checked={checkTodo}
                    onChange={(e) => onCheckTodo(e,todo.id)}
                /> 
                <button onClick={() => handelDelit(todo.id)} className={s.button}>Delet</button>
            </div>
            
            
        </div>
    )
}

export default Todo
