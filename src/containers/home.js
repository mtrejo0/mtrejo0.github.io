import React from 'react'
import "./home.css"

const Home = () => {
    return <div class='wrapper'>
        <h1>Moises Trejo ok</h1>
        <p>I am a 3rd year CS student I am interested in cookign and money.</p>
        <img class='mexico' src={process.env.PUBLIC_URL + `/images/mexico.jpg`} alt="Moises in Mexico"></img>
    </div>
}

export default Home;