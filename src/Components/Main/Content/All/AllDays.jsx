import React from 'react';
import s from './styles.module.css';
import { useSelector } from 'react-redux'
import Todo from './Todo/Todo'

function AllDays() {
    const todos = useSelector(state => state.todoState.todo)

    const todoElement = todos.length > 0 ?
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
        : 'Add new todo'

    return (
        <div className={s.todoContent}>
            <div className={s.todoElement}> {todoElement}</div>
        </div>
    )
}

export default AllDays
