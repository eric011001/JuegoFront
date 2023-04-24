import React, {useState} from 'react'
import TableGames from './TableGames';
import Swal from 'sweetalert2';
import {useMutation, gql} from '@apollo/client'
import TableGamers from './TableGamers';

const AGREGA_GENERAL = gql`
mutation NewGeneral($input: GeneralInput) {
    newGeneral(input: $input) {
      id
      name
      active
    }
  }
`

const HomeDefault = ({setactiveGame}) => {
    const [asignarPantallas, setAsignarPantallas] = useState(null);
    const [newGeneral] = useMutation(AGREGA_GENERAL);
    const addNewGame = () => {
        Swal.fire({
            title: 'Agregar juego',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'off'
            },
            showCancelButton: true,
            confirmButtonText: 'Agregar',
            showLoaderOnConfirm: true,
            confirmButtonColor: '#43B0FF',
            preConfirm: async(login) => {
              const {data} = await newGeneral({
                variables: {
                    input: {
                        name: login
                    }
                }
              })
              console.log(data);
            },
            allowOutsideClick: () => !Swal.isLoading()
          })
    }
    return(
        <div>
            <div className='container-button'>
                <button onClick={() => addNewGame()} className='btn-game'>Crear Juego</button>
            </div>
            <div className='principal-container-home'>
                <TableGames setactiveGame={setactiveGame} setAsignarPantallas={setAsignarPantallas}/>
                {
                    asignarPantallas ?
                    (
                        <TableGamers  setAsignarPantallas={setAsignarPantallas} asignarPantallas={asignarPantallas}/>
                    ) :('')
                }
            </div>
            
        </div>
    )
}

export default HomeDefault;