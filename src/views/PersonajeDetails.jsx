import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from 'react-bootstrap';

const PersonajeDetails = () => {
    const params = useParams();
    const navigate = useNavigate();
    const{data} = useFetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    console.log(data); 
       
     return (   
        
        <div className='cont rounded shadow m-3 p-3'>
            <div className="row ">
                <div className='col-12'>
                    {data && (
                        <div className='rounded shadow m-3 p-3'>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={data.sprites.front_default} />
                                <Card.Body>
                                    <Card.Title><h1>{data.name}</h1></Card.Title>
                                    <Card.Text>Personaje de tipo: {data.types[0].type.name} <br/>Habilidad es:  {data.abilities[0].ability.name}
                                    </Card.Text>
                                    <Card.Text>Pesa:  {data.weight} kg <br/> Mide: {data.height} cm 
                                    </Card.Text>
                                    <Card.Text>Tiene {data.stats[0].base_stat} puntos de vida. <br/>{data.stats[1].base_stat} puntos de ataque<br/> {data.stats[2].base_stat} puntos de defensa<br/> {data.stats[3].base_stat} puntos de ataque especial<br/> {data.stats[4].base_stat} puntos de defensa especial <br/> {data.stats[5].base_stat} puntos de velocidad
                                    </Card.Text>
                                    <button type="button" class="btn btn-secondary btn-lg btn-block" onClick={()=> navigate('/personajes')}>Volver</button>
                                    
                                </Card.Body>
                            </Card>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default PersonajeDetails;