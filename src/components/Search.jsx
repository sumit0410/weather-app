import React, { useRef } from 'react'
import './Weather.css'

export default function Search(props) {

    const searchInput = useRef();
  return (
    <div className='search-bar'>
        <input type="search" value={props.searchData} onChange={()=>props.eventHandler(searchInput.current.value)} ref={searchInput} className=''/>
        <button className='search-btn' onClick={props.searchWeather}>Search</button>
    </div>
  )
}
