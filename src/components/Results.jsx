import React, { useEffect} from 'react';
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player';

import { useResultsContext } from '../contexts/ResultsContextProvider';
import Loading from "./Loading"
const Results = () => {
  const {getResults, results, searchTerm, isLoading} = useResultsContext();
  const location = useLocation();

  useEffect(() =>{
    if(searchTerm){
      if(location.pathname === "/video"){
        getResults(`/search/q=${searchTerm} videos`)
      }else {

        getResults(`${location.pathname}/q=${searchTerm}&num=40`)
      }
    }
  },[searchTerm, location.pathname]);

  if(isLoading) return <Loading/>;
  switch(location.pathname){
    case "/search":
      return (       
        <div className="flex flex-wrap justify-between space-y-6 ">
        {results.length === 0? (
          <div className="w-full h-[60vh] flex justify-center items-center">
          <h1 className='text-3xl sm:text-4xl text-primary border-b-4 border-t-4 p-2 shadow-lg rounded-full border-dotted text-center'>“Life is trying things to see if they work.” – Ray Bradbury</h1>
          </div>
          ): null}
        {results?.map(({ link, title }, index)=>(
          <div key={index} className="sm:w-2/5 w-full">
          <a href={link} target="_blank" rel='noreferrer' >
          <p className="text-lg text-[#4285f4] hover:underline dark:text-[#7aadfe]">
          {title}
          </p>
          <p className="text-sm">
          {link.length > 30 ? link.substring(0,30):link}
          </p>
          </a>
          </div>
        ))}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center gap-2">
        {results.length === 0? (
          <div className="w-full h-[60vh] flex justify-center items-center">
          <h1 className='text-3xl sm:text-4xl text-primary border-b-4 border-t-4 p-2 shadow-lg rounded-full border-dotted text-center'>“Life is trying things to see if they work.” – Ray Bradbury</h1>
          </div>
          ): null}
        {results?.map(({image, link:{ href, title}}, index)=>(
          <div key={index}>
          <a className="sm:p-5 p-3 " href={href} target="_blank" rel="noreferrer" >
          <img className='hover:shadow-lg' src={image?.src} alt={title} loading="lazy" />
          <p className="w-36 break-word text-sm mt-2 text-[#4285f4] hover:underline dark:text-[#7aadfe]">
          {title}
          </p>
          </a>
          </div>
        ))}
        </div>
      );
    case "/news":
      return (
        <div className="flex flex-wrap justify-between space-y-6 items-center">
        {results.length === 0? (
          <div className="w-full h-[60vh] flex justify-center items-center">
          <h1 className='text-3xl sm:text-4xl text-primary border-b-4 border-t-4 p-2 shadow-lg rounded-full border-dotted text-center'>“Life is trying things to see if they work.” – Ray Bradbury</h1>
          </div>
          ): null}
        {results?.map(({ links, id, source, title })=>(
          <div key={id} className="sm:w-2/5 w-full">
          <a href={links?.[0].href} target="_blank" rel='noreferrer' className='hover:underline' >
          <p className="text-lg text-[#4285f4] hover:underline dark:text-[#7aadfe]">
          {title}
          </p>
          </a>
          <div className="flex gap-4">
            <a href={source?.href} target="_blank" rel='noreferrer'>
              {source?.href}
            </a>
          </div>
          
          </div>
        ))}
        </div>
      );
    case "/video":
      return (
        <div className='flex justify-center items-center flex-wrap'>
        {results.length === 0? (
          <div className="w-full h-[60vh] flex justify-center items-center">
          <h1 className='text-3xl sm:text-4xl text-primary border-b-4 border-t-4 p-2 shadow-lg rounded-full border-dotted text-center'>“Life is trying things to see if they work.” – Ray Bradbury</h1>
          </div>
          ): null}
        {results?.map((video,index)=>(
          <div  key={index} className="hover:shadow p-2">
          {video.additional_links?.[0]?.href && ReactPlayer.canPlay(video.additional_links?.[0].href) && <ReactPlayer key={index} url={video.additional_links?.[0].href} controls width="355px" height="200px" />}
          </div>
        ))}
        </div>
      );
      default:
    return 'ERROR';
  }
  

  
}

export default Results