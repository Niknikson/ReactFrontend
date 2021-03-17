import React from 'react'
import { useDispatch } from 'react-redux'
import { getNewsThunk } from '../../../../../redux/newsReducer'
import s from './selectNews.module.css'

const SelectNews = ({ currentPage, setCurrentPage, searchData, setSearchData, sortBy, setTypeSearch}) => {
    const dispatch = useDispatch()
    const getNewsSelected = () => {
        setCurrentPage(1)
        console.log(currentPage, searchData, sortBy)
        dispatch(getNewsThunk(currentPage, searchData, sortBy))
    }
    return (
        <div className={s.selectNews}>
            <div>
                <input
                    className={s.input}
                    onChange={e => setSearchData(e.target.value)} />
            </div>
            <div>
                <select onChange={e => setTypeSearch(e.target.value)}>
                <option value={'relevancy'}>Relevancy</option>
                <option value={'popularity'}>Popularity</option>
                <option value={'publishedAt'}>Published</option>
                </select>
                <button onClick={() => getNewsSelected()}>Find</button>
            </div >
        </div>
    )
}

export default SelectNews
