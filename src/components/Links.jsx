import React from 'react'
import { NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSearch,faNewspaper, faImage, faVideo} from '@fortawesome/free-solid-svg-icons'

  

const links = [
  { url:"/search", icon:faSearch, text: "All"},
  { url:"/news",icon:faNewspaper, text: "News"},
  { url:"/image",icon:faImage, text: "Images"},
  { url:"/video",icon:faVideo, text: "Videos"},
];

const activeClassName= "border-dotted border-b-4 -mb-2 border-primary  px-2 ";
const linkStyle = "m-2 mb-0";

const Links = () => {
  return (
    <div className='flex w-full sm:w-2/6 mx-auto justify-around sm:justify-between text-primary items-center mt-4'>
    {links.map(({ url,icon, text})=>(
        <NavLink 
        to={url} 
        className={({ isActive }) =>
              isActive ? activeClassName : linkStyle
            }
            >
            <FontAwesomeIcon icon={icon} />{` ${text}`}
        </NavLink>
    ))}
    </div>
  )
}

export default Links