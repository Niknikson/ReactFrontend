import s from './news.module.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getNewsThunk } from "../../../../redux/newsReducer";
import ItemNews from './ItemNew';
import { useState } from 'react';
import SelectNews from './selectNews/SelectNews';


const Test = () => {
  const [searchData, setSearchData] = useState('business')
  const [sortBy, setTypeSearch] = useState('relevancy')
  const [fetching, setFetching] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   if (fetching) {
  //     console.log('fetching')
  //     dispatch(getNewsThunk(currentPage, searchData, sortBy)).finally(() => setFetching(false))
  //     setCurrentPage(prevState => prevState + 1)
  //   }
  // }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrolHanler)
    return () => {
      document.removeEventListener('scroll', scrolHanler)
    }
  }, [])

  const totalCount = useSelector(state => state.newsData.totalPage)
  const articles = useSelector(state => state.newsData.articles)
  
  const element = articles.map((a) => <ItemNews  key={a.publishedAt} article={a} /> )

  const scrolHanler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
      && articles.length == totalCount
    ) {
      setFetching(true)
    }
  }
 
  return (
    <div className={s.newsContainer}>
      <div>
        {searchData}
        {sortBy}
        <SelectNews
          currentPage={currentPage} setCurrentPage={setCurrentPage}
          sortBy={sortBy} setTypeSearch={setTypeSearch}
          searchData={searchData} setSearchData={setSearchData} />
      </div>
        {element}
    </div>
  );
};

export default Test;
