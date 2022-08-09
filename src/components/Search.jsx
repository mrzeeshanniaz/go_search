import React, { useEffect, useState} from 'react';
import { useDebounce } from 'use-debounce';

import { useResultsContext } from "../contexts/ResultsContextProvider";
import Links from './Links';


const Search = () => {
  const [text,setText] = useState("");
  const {setSearchTerm} = useResultsContext();
  const [debounceValue] = useDebounce(text, 500);
  

  useEffect(() =>{
    if(debounceValue) setSearchTerm(debounceValue);
  },[debounceValue])

  return (
    <div className="w-4/5 sm:w-2/4 mt-2">
      <input 
      type="text"
      autoComplete="off"
      value={text}
      placeholder="Search here..."
      onChange={ e => setText(e.target.value)}
      className="w-full shadow-md border-2 border-primary  rounded-full shadow-sm  outline-none p-2 sm:p-4 text-black hover:shadow-lg"
       />
       <div>
        <Links/>
       </div>
      </div>
  )
}

export default Search