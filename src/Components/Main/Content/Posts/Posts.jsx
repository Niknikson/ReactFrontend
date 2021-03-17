import React from 'react'
import { useState } from 'react'
import Modal from './Modal'
import  './posts.css'

const Posts = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <div className='post'>
            <button className='post__btn' onClick={()=> setModalActive(true)}>Add new post</button>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}

export default Posts
