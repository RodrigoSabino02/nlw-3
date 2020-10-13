import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/global.css'
import '../styles/pages/landing.css'

import Logo from '../images/Logo.svg'
import Arrow from '../images/Arrow.svg'

function Landing(){
    return(
        <div id="page-Landing">
      <div className="content-wrapper">
        <img src={Logo} alt="Happy"/>

        <main>
          <h1>Leve feliciade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Fortaleza</strong>
          <span>Ceara</span>
        </div>

        <Link to="/app" className="enter-app">
            <img src={Arrow} alt="=>"/>
        </Link>

        <a >
          
        </a>
      </div>
    </div>
    )
}

export default Landing