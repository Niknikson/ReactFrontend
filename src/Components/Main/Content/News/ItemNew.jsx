import React from 'react'
import s from './news.module.css'

const itemNews = (props) => {
debugger
    return (
        <div className={s.itemNews}>
            <div className={s.newsText}>
                <a href={props.article.url} className={s.headerLink}>{props.article.title}</a>
                <div className={s.content}>{props.article.content}</div>
            </div>
            <div> <img className={s.img} src={props.article.urlToImage} /></div>
        </div>
    )
}

export default itemNews
