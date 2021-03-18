import React from 'react'
import { useState } from 'react'
import Modal from './form/Modal'
import { useDispatch, useSelector } from "react-redux";
import  './posts.css'

const Posts = () => {
    const [modalActive, setModalActive] = useState(false)
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
   


    return (
        <div className='post'>
            <button className='post__btn' onClick={()=> setModalActive(true)}>Add new post</button>
            <Modal
                postData={postData} setPostData={setPostData}
                active={modalActive}
                setActive={setModalActive} />
        </div>
    )
}

export default Posts
