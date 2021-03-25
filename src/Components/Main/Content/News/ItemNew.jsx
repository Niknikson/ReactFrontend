import React from 'react'
import s from './news.module.css'

const itemNews = (props) => {
    const img = props.article.urlToImage || "https://www.dominiqueanselny.com/wp-content/themes/da-ny/img/menu/news.png"
    return (
        <div className={s.itemNews}>
            <div className={s.newsText}>
                <a href={props.article.url} className={s.headerLink}>{props.article.title}</a>
                <div className={s.content}>{props.article.content}</div>
            </div>
            <div> <img className={s.img} src={img} alt="альтернативный текст" /></div>
        </div>
    )
}

export default itemNews
