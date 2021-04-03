import React from 'react'
import './postForm.css'
import { useDispatch } from "react-redux";
import { createPost } from '../../../../../store/actions/posts';
const Modal = ({ active, setActive, postData, setPostData }) => {
    const dispatch = useDispatch()
    const clear = () => {
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };
    
    const handleSubmit = async (e) => {
        debugger
        console.log(postData)
        e.preventDefault();
            dispatch(createPost(postData));
            clear();
    }

    return (
        <div
            className={active ? 'modal active' : 'modal'}
            onClick={() => setActive(false)}>
            <div
                className={active ? "modal__content active" : "modal__content"}
                onClick={e => e.stopPropagation()}>
                <form className='form' onSubmit={handleSubmit}>
                    <div>Create a new post </div>
                    <input  name="creator"  placeholder="Creator"  value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    <input name="title"  placeholder="Title"  value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <textarea cols="30" rows="5" name="message"  placeholder="Message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <input name="tags"  placeholder="Tags (coma separated)"  value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                    {/* <div ><button type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div> */}
                    <div className='btnGrop'>
                        <button type="submit" >Submit</button>
                        <button onClick={clear} >Clear</button>
                    </div>
                    
                </form>
                </div>
        </div>
    )
}

export default Modal
