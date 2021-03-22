import React from 'react'
import s from './post.module.css'


const Post = ({ post }) => {
    debugger
    let img = post.selectedFile || 'https://media.istockphoto.com/vectors/modern-brush-lettering-of-and-so-the-adventure-begins-with-hand-drawn-vector-id1143505312?k=6&m=1143505312&s=612x612&w=0&h=nnO7OM1xwc5clpfgUGmWYlVPowaiQvhj2zHso9ON2wc='
    return (
        <div className={s.post}>
            <img className={s.img} src={img} alt="альтернативный текст" />

            <div className={s.textContainer}>
            <div className={s.text}>
            <div className={s.creator}>Creator {post.creator}</div>
            <div className={s.title}>Title {post.title}</div>
            <div className={s.message}>About {post.message}</div>
            <div>{post.tags}</div>
                </div>
                
                <div className={s.button}>
                    <button className={s.like} ><i class="small material-icons">thumb_up</i></button>
                    <button className={s.delete}><i class="small material-icons">delete</i></button>
            </div>
            </div>
        </div>
    )
}

export default Post
