import React from 'react'
import { useQuery, useMutation,  gql } from "@apollo/client";
import Swal from 'sweetalert2';
const OBTENER_GENERALES = gql`
query GetGenerals {
    getGenerals {
      active
      gamers {
        name
        id
      }
      id
      name
    }
  }
`;

const START_GAME = gql`
mutation StartGame($startGameId: ID!) {
    startGame(id: $startGameId) {
      id
      name
    }
  }
`;

const STOP_GAME = gql`
    mutation StopGame($stopGameId: ID!) {
        stopGame(id: $stopGameId) {
            name
        }
    }
`;


const TableGames = ({setactiveGame, setAsignarPantallas}) => {
    const {data,loading,error} = useQuery(OBTENER_GENERALES);
    const [startGame] = useMutation(START_GAME);
    const [stopGame] = useMutation(STOP_GAME);
    if(loading){
        return 'Cargando...'
    }
    const {getGenerals} = data;

    const changeStateGame = async(general) => {
 
        if(general.active){
            const {data,error} = await stopGame({
                variables: {
                    stopGameId: general.id
                }
            })
            console.log(data);
            Swal.fire({
                icon: 'success',
                title: 'Iniciado',
                text: 'El juego ha terminado',
              })
        }else{
            const {data,error} = await startGame({
                variables: {
                    startGameId: general.id
                }
            });
            Swal.fire({
                icon: 'success',
                title: 'Iniciado',
                text: 'El juego ha iniciado',
              })
        }
    }

    return(
        <div className='games-container'>
            {
                getGenerals.map(general => (
                    <div className='game-container' key={general.id}>
                        <div className='photo-game-container'>
                            <img className='image' src='../iamge.png'/>
                        </div>
                        <div className='details-game-containeer'>
                            
                            <h3 className='title-name-game'>{general.name}</h3>
                            <div className='users-game-container'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                {   
                                    general.gamers.map((gamer,index) => (
                                        <>
                                            {gamer.name}{index == general.gamers.length-1 ?'' : ', '}
                                        </>
                                    ))
                                }
                            </div>
                            <div className='button-game-container'>
                                <button onClick={() => setactiveGame(general)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16"> <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/> <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/> </svg></button>
                                <button onClick={() => setAsignarPantallas(general)}>Agregar jugadores</button>
                                <button onClick={() => changeStateGame(general)}>{general.active ? 'terminar juego' : 'iniciar juego' } </button>
                            </div>
                            <span>
                            
                            </span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}   

export default TableGames;