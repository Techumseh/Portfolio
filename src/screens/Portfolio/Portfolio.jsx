import React, { useState, useEffect } from 'react'
import './Portfolio.css'
import Layout from '../../components/shared/Layout/Layout'
import { getPortfolio } from '../../services/products'
import { useParams, Link } from 'react-router-dom'

const Portfolio = (props) => {


    return (
      <Layout>
             <div className="portfolio-detail">
                <img className="portfolio-detail-image" src="https://i.imgur.com/Mi0SmTX.jpg" width="200px" />
                <div className="detail">
                    <div className="name">Jeff Bond Portfolio</div>
            <div className="description">A search engine for musicians and musical artists created in HTML,Javascript and the audioDb api</div>
            <div>
              <a className="description" href="https://github.com/Techumseh/Portfolio">GitHub Repo</a>
            </div>
                </div>
        </div>

        <div className="portfolio-detail">
                <img className="portfolio-detail-image" src="https://i.imgur.com/wmr1s2k.png" width="200px" />
                <div className="detail">
                <div className="name">HipHopasaurus</div>
            <div className="description">A search engine for musicians and musical artists created in HTML,Javascript and the audioDb api</div>
            <div>
              <a className="description" href="https://github.com/Techumseh/Hiphopasaurus">GitHub Repo</a>
            </div>
                </div>
        </div>

        
        <div className="portfolio-detail">
                <img className="portfolio-detail-image" src="https://i.imgur.com/beAsNnW.png" width="200px" />
                <div className="detail">
                    <div className="name">Rhyme-Line</div>
            <div className="description">This is an desktop first  full CRUD web application that creates  a list of music artists and return information about them including artistName, albumImage, artistAlbum, albumSong, albumYear, artistTwitter, artistFacebook. Developed in React using a custom API developed in Airtable. </div>
            <div>
            <a className="description" href="https://github.com/Techumseh/Rhyme-line">GitHub Repo</a>
            </div>
                </div>
        </div>
        
        <div className="portfolio-detail">
                <img className="portfolio-detail-image" src="https://i.imgur.com/ApadR7z.png" width="200px" />
                <div className="detail">
                    <div className="name">Pre:vue</div>
            <div className="description">This is an desktop first  full CRUD web application that creates  a list of music artists and return information about them including artistName, albumImage, artistAlbum, albumSong, albumYear, artistTwitter, artistFacebook. Developed in React using a custom API developed in Airtable. </div>
            <div>
            <a className="description" href="https://github.com/Techumseh/Prevue">GitHub Repo</a>
            </div>
                </div>
            </div>
        </Layout>
    )
}

export default Portfolio