import React, {useState, useEffect} from 'react'
import { useMutation, gql } from "@apollo/client";
import Swal from 'sweetalert2';
const ADD_GAMER = gql`
mutation AddGamer($input: AddGamerInput) {
    addGamer(input: $input) {
      name
    }
  }
`;

const Gamer = ({gamer,game}) => {
    const [isIn, setisIn] = useState(false);
    const [addGamer] = useMutation(ADD_GAMER);
    useEffect(() => {
      game.gamers.forEach(item => {
        if(item.id == gamer.id){
            setisIn(true);
        }
      })
    }, [])
    

    const addNewGamer = async() => {
        try {
            
            const {data,error} = await addGamer({
                variables: {
                    input: {
                        game: game.id,
                        gamer: gamer.id
                    }
                }
            })
            Swal.fire({
                icon: 'success',
                title: 'Agregado',
                text: 'El jugador se ha agregado',
              })
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <div className='gamer-container'>
            <span>{gamer.name}</span>
            {!isIn ? (<button onClick={() => addNewGamer()} className='add-gamer-btn'>Agregar</button>) : ('')}
        </div>
    )
}

export default Gamer;