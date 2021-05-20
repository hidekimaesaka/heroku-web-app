import React from "react"
import "../css/Music.css"
import youtubeicon from "../assets/youtubeicon.png"
import spotifyicon from "../assets/spotifyicon.png"
import gatinhogif from "../assets/gatinho.gif"

export default function Music(){
    return(
        <div className="main-container">
            <p className="text-music">
            I really love music, it has always been my biggest and best companion for everything, 
            including coding. When I have a free time, I take the opportunity to compose something. If you are curious just click on the icons below, 
            both Spotify and YouTube will give you some examples.
            </p>
            <a target="_blank" rel="noreferrer" href="https://open.spotify.com/artist/3fqGxqFaDF0CAwQhoZfdef?si=SlZ7sN41Rna3hhOq9Yr2-g">
                <img className="icon-music" src={spotifyicon} alt="spotifyicon" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCj4IzT3hdObJaTxDA7yVj2g">
                <img className="icon-music" src={youtubeicon} alt="youtubeicon" />
            </a>
            <br />
            <img className="cat-gif" src={gatinhogif} alt="catgif" />
        </div>
    )
}