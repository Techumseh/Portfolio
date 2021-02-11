import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import Layout from '../../components/shared/Layout/Layout'
import { getPortfolio } from '../../services/products'
import { useParams, Link } from 'react-router-dom'

const Portfolio = (props) => {


    return (
      <Layout>
        <div className="home"/>
             <div className="portfolio-detail">
                <img className="portfolio-detail-image" src="https://i.imgur.com/WY2a5NR.png" width="200px"  height="200px"/>
                <div className="detail">
                    <div className="name">Jeff Bond Professional Portfolio</div>
            <div className="description">A portfolio I created for myself using React</div>
            <div>
              <a className="description" href="https://github.com/Techumseh/Portfolio">GitHub Repo</a>
            </div>
                </div>
        </div>

        <div className="portfolio-detail">
                <img className="portfolio-detail-image" src="https://i.imgur.com/wmr1s2k.png" width="200px" height="200px" />
                <div className="detail">
                <div className="name">HipHopasaurus</div>
            <div className="description">A search engine for musicians and musical artists created in HTML,Javascript using the audioDb api</div>
            <div>
              <a className="description" href="https://github.com/Techumseh/Hiphopasaurus">GitHub Repo</a>
            </div>
                </div>
        </div>

        
        <div className="portfolio-detail">
                <img className="portfolio-detail-image" src="https://i.imgur.com/beAsNnW.png" width="200px" height="200"/>
                <div className="detail">
                    <div className="name">Rhyme-Line</div>
            <div className="description">This is an desktop first  full CRUD web application that creates a playlist of music artists from search. Using the search engine returns information about them including artistName, albumImage, artistAlbum, albumSong, albumYear, artistTwitter, artistFacebook. Developed in React using a custom API developed in Airtable. </div>
            <div>
            <a className="description" href="https://github.com/Techumseh/Rhyme-line">GitHub Repo</a>
            </div>
                </div>
        </div>
        
        <div className="portfolio-detail">
                <img className="portfolio-detail-image" src="https://i.imgur.com/ApadR7z.png" width="200px" />
                <div className="detail">
                    <div className="name">Pre:vue</div>
            <div className="description">This is afull CRUD web application that provides a list of businesses  and return information about them including artistName, albumImage, artistAlbum, albumSong, albumYear, artistTwitter, artistFacebook. Developed in React using a custom API developed in Airtable. </div>
            <div>
            <a className="description" href="https://github.com/Techumseh/Prevue">GitHub Repo</a>
            </div>
                </div>
            </div>
        </Layout>
    )
}

export default Portfolio