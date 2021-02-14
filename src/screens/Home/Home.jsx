import React from 'react'
import './Home.css'
// import ProductCards from '../../components/ProductCards/ProductCards'
import Layout from '../../components/shared/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
      <img className="img" src="https://i.imgur.com/uTjXz8V.jpg" width="100%" height="25%"/>
        <p className="centered">I'm Jeff Bond and I am an Atlanta based Software Developer/IT Project Manager. I have 20 years of success in Tech including full stacksoftware engineering, project manangement, and DevOps.
       </p>
      </div>
    </Layout>
  )
}

export default Home