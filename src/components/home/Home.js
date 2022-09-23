import React from 'react'
import Blog from '../blog/Blog'
import Counter from '../counter/Counter'
// import Footer from '../footer/Footer'
import LatestPro from '../latestProjects/LatestPro'
import Services from '../services/Services'
import Header from './Header'
import MeetTeam from '../meetTeam/MeetTeam'

import '../home/Home.css'

const Home = () => {
  return (
    <>
      <section className="hederhome">
      <Header/>
      <Services/>
      <LatestPro/>
      <Counter/>
      <MeetTeam/>
      <Blog/>
      {/* <Footer/> */}

        



      </section>

    </>
  )
}

export default Home