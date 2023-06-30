import React from 'react';
import {useFetch} from '../hooks/useFetch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Personajes = () => {
    const { data, loading, error } = useFetch('https://pokeapi.co/api/v2/pokemon');
    const [selectPersonajes, setSelectPersonajes] = useState([null]);
    console.log(data);
    const navigate= useNavigate();
    const handleClick = () => {
        navigate(`/personajes/${selectPersonajes}`);
        console.log(selectPersonajes);
    }
    return (    
        <div className='container'>
            <h1>Selecciona tu personajes favorito</h1>
            <div className="row">
                <div className='col-12'>
                    {loading && <p>Cargando...</p>}
                    {data && (
                        <div className='input-group mb-3'>
                            <select className='form-select' id='personajes' onChange={e=> setSelectPersonajes(e.target.value)}>
                                <option value=''>Selecciona un personaje</option>
                                {data.results.map((personaje) => (
                                    <option key={personaje.name} value={personaje.name}> {personaje.name}</option>
                                ))}
                                </select>
                                {selectPersonajes && (
                                  <button className='btn btn-secondary' type='button' onClick={handleClick}> ver detalles</button>
                                )}
                               
                        </div>
                    )}
                    
                </div>  
        </div>
        </div>
    );
}
   

export default Personajes;