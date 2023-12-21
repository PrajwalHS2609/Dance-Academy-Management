import React from 'react'
import style from "./home.module.css"
import Backgroundimg from './Backgroundimg'
import BranchPage from './BranchPage'
const Home = () => {
  return (
    <div className={style.homeMain}>
      <Backgroundimg/>
<BranchPage/>    </div>
  )
}

export default Home
