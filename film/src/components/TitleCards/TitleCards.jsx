import React, { useEffect, useRef, useState } from 'react'
import './titlecards.css'

import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'



const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2RiYWZiNWVhZjVjMTM3MWNjNGQ1YTg5Mjg3NDZiOSIsIm5iZiI6MTczNjM5MTM4Ni44NjcsInN1YiI6IjY3N2YzYWRhOTEyY2IyNzI4MGJhZjVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukqOb_-idHGLcSQuEG6X9GmZdaPVRVZuvIpGn-QqYtk'
    }
  };
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='title'>
        <h2>{title ? title: "Popular Shows"}</h2>
        <div className="card-list" ref={cardsRef}>
          {
            apiData.map((card, index) => {
              return <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt='' />
                <p>{ card.original_title } </p>
              </Link>
            })
          }
        </div>
    </div>
  )
}

export default TitleCards

