import React, { useEffect, useState } from 'react'
import './player.css'

import arrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from "react-router-dom"

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0N2RiYWZiNWVhZjVjMTM3MWNjNGQ1YTg5Mjg3NDZiOSIsIm5iZiI6MTczNjM5MTM4Ni44NjcsInN1YiI6IjY3N2YzYWRhOTEyY2IyNzI4MGJhZjVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukqOb_-idHGLcSQuEG6X9GmZdaPVRVZuvIpGn-QqYtk'
    }
  };

  useEffect( () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])
  
  

  return (
    <div className='player'>
      <img src={arrow} alt="" onClick={() => {navigate(-2)}}/>
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen ></iframe>
      <div className="infos">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player