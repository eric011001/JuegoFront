import React from 'react'
import { useQuery, gql } from "@apollo/client";
import Gamer from './Gamer';
const OBTENER_GAMERS = gql`
query GetGamers {
    getGamers {
      id
      name
      hits
    }
  }
`;


const TableGamers = ({asignarPantallas, setAsignarPantallas}) => {
    
    const {data, loading, error} = useQuery(OBTENER_GAMERS);

    if(loading){
        return 'cargando'
    }
    
    const {getGamers} = data;

    return(
        <div className='gamers-container'>
            <div className='close-btn-container'>
                <button onClick={() => setAsignarPantallas(null)}>X</button>
            </div>
            {
                getGamers.map(gamer => (
                    <Gamer key={gamer.id} gamer={gamer} game={asignarPantallas}/>
                ))
            }
        </div>
    )
}

export default TableGamers;