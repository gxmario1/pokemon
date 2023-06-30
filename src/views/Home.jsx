import React from 'react';
import '../App.css'

const Home = () =>{
    return(
        <div className="container text-center">
            <div className="rounded shadow m-3 p-3">
                <div>
                <h1>Bienvenido maestro Pokémon!</h1>
                    <img src="https://i.blogs.es/94c76e/pokemon-pikachu-estara-de-regreso-en-el-nuevo-anime-como-parte-de-un-par-de-personajes-protagonistas-recien-revelados/1366_2000.jpeg" alt="pokemon" className="mx-auto d-block"/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;