import React, {useEffect} from 'react'
import { useQuery, gql } from "@apollo/client";
import TableGamersActive from './TableGamersActives';
import Table from './Table';

const OBTENER_JUGADORES = gql`
query GetActiveGeneralGamers {
    getActiveGeneralGamers {
      name
      id
      hits
      pieces {
        number
        position
      }
    }
  }
`;

const Game = ({game, setactiveGame}) => {
    const {data, loading, error, startPolling, stopPolling} = useQuery(OBTENER_JUGADORES);

    useEffect(
        () => {
          startPolling(1000);
          return () => {
            stopPolling();
          };
        },
        [startPolling, stopPolling]
    );

    if(loading){
        return('cargando...')
    }

    const {getActiveGeneralGamers} = data;

    return(
        <div className='principal-game-container'>
            <div className='title-principal-game-container'>
                <h3>{game.name}</h3>
            </div>
            <div className='btn-cerrar-game'>
                <button onClick={() =>setactiveGame(null)}>X Cerrar</button>
            </div>
            <div className='table-gamers-container'>
                <Table gamers={getActiveGeneralGamers}/>
                <TableGamersActive gamers={getActiveGeneralGamers}/>
            </div>
        </div>
    )
}

export default Game;