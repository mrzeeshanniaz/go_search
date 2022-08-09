import React from 'react'
import{ Puff as Loader} from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center"><Loader  color="#fbbc05" height={550} width={80} /></div>
  )
}

export default Loading