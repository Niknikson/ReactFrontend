import React from 'react'
import { useState } from 'react'
import Modal from './form/Modal'
import { useDispatch, useSelector } from "react-redux";
import  './posts.css'
import { getPosts } from '../../../../actions/posts';
import Post from './post/Post';
import { useEffect } from 'react';

const Posts = () => {
    const dispatch = useDispatch()
    const [modalActive, setModalActive] = useState(false)
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const posts = useSelector(state => state.postData)
    const post = posts.map((p) => <Post post={p} key={p._id}/>)

    
    return (
        <div className="post__content">
            <button className='post__btn' onClick={()=> setModalActive(true)}>Add new post</button>
            <Modal
                postData={postData} setPostData={setPostData}
                active={modalActive}
                setActive={setModalActive} />
            <div className="posts__content">{post}</div>
        </div>
    )
}

export default Posts
