import React, { Fragment, useState } from 'react'
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { RoutesComponent } from './RoutesComponent';  

const App = () => {
  const [darkTheme , setDarkTheme] = useState(false)

  return (
    <Fragment>
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-secondary text-black dark:text-white dark:bg-secondaryDark min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesComponent/>
        <Footer/>
      </div>
    </div>
    </Fragment>
  )
}

export default App