# practica-1-maquetacion-web-Maria-Pereda-Lucia-Ramirez

/*FAUNA Y FLORA*/
#fyf {
    padding: 4em 6em;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #0D0709;
}

#gallery {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    margin-top: 2em;
}

#gallery > div {
    width: 33.33%;
    float: left;
    position: relative;
}

#gallery > div > img {
    width: 100%;
}

#gallery > div > span {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #2e2e2e;
    color:rgb(255, 255, 255);
    text-align: center;
    padding-top: 10%;
    opacity: 0;
    transition: 2s;
}

#gallery > div > span > p {
    margin: 2em;
    font-size: 0.8em;
}

#gallery > div:hover >span {
    opacity: 1;
    
}