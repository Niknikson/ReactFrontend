import React from 'react'
import { useDispatch } from 'react-redux'
import { selectNewsThunk } from '../../../../../store/newsReducer'
import s from './selectNews.module.css'

const SelectNews = ({ setFetching, currentPage, setCurrentPage, searchData, setSearchData, sortBy, setTypeSearch}) => {
    const dispatch = useDispatch()
    const getNewsSelected = () => {
        setCurrentPage(1)
        dispatch(selectNewsThunk(currentPage, searchData, sortBy))
    }
    return (
        <div className={s.selectNews}>
            <div>
                <input
                    className={s.input}
                    onChange={e => setSearchData(e.target.value)}
                    placeholder='Looking for business'
                />
            </div>
            <div>
                <select
                    className={s.select}
                    onChange={e => setTypeSearch(e.target.value)}>
                <option value={'relevancy'}>Relevancy</option>
                <option value={'popularity'}>Popularity</option>
                <option value={'publishedAt'}>Published</option>
                </select>
                
            </div >
            <div >
                <button
                    className={s.selectBtn}
                    onClick={getNewsSelected}>Find</button>
            </div>
        </div>
    )
}

export default SelectNews
