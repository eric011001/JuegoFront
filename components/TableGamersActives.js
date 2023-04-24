import React from 'react'

const colors = [
    '#ff324e',
    '#37bc00',
    '#e7cb00',
    '#007fe3'
]

const fichas = [
    'rojo1.png',
    'verde1.png',
    'amarillo1.png',
    'azul1.png'
]

const TableGamersActive = ({gamers}) => {
    return(
        <div className='gamers-game-container'>
            {
                gamers.map((gamer, index) => (
                    <div className='gamer-game-container' style={{backgroundColor: colors[index]}} key={gamer.id}>
                        <div className='image-gamer-container'>
                            <img style={{width: '100%'}} src={`../${fichas[index]}`}/>
                        </div>
                        <div className='text-container-gamer'>
                            <span className='name-title'>{gamer.name}</span>
                            <span>Aciertos: {gamer.hits}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TableGamersActive