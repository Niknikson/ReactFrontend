import s from './news.module.css'
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getNewsThunk } from "../../../../store/newsReducer";
import ItemNews from './ItemNew';
import { useState } from 'react';
import SelectNews from './selectNews/SelectNews';
import Prelouder from '../../../../untils/prelouder/Prelouder';


const Test = () => {
  const [searchData, setSearchData] = useState('business')
  const [sortBy, setTypeSearch] = useState('relevancy')
  const [fetching, setFetching] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
    if (fetching) {
      console.log('fetching')
      dispatch(getNewsThunk(currentPage, searchData, sortBy)).finally(() => setFetching(false))
      setCurrentPage(prevState => prevState + 1)
      console.log(currentPage, searchData, sortBy)
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrolHanler)
    return () => {
      document.removeEventListener('scroll', scrolHanler)
    }
  }, [])

  const totalCount = useSelector(state => state.newsData.totalPage)
  const articles = useSelector(state => state.newsData.articles)
  const isFetchingPrelouder = useSelector(state => state.newsData.isFetching)

  const element = articles.map((a) => <ItemNews  key={a.publishedAt} article={a} /> )

  const scrolHanler = (e) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
      && articles.length === totalCount
    ) {
      setFetching(true)
    }
  }
 
  return (
    <div className={s.newsContainer}>
      <div>
        <SelectNews
          setFetching={setFetching}
          currentPage={currentPage} setCurrentPage={setCurrentPage}
          sortBy={sortBy} setTypeSearch={setTypeSearch}
          searchData={searchData} setSearchData={setSearchData} />
      </div>
      {element}
      <div className={s.prelouderNews}>
      {
        isFetchingPrelouder === false
          ?
           null 
          :
          <Prelouder/>
        }
      </div>
    </div>
  );
};

export default Test;
