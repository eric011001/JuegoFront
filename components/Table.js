import React from 'react'

const mat = [
    [{style: 'red', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'jug', position: 43},{style: 'block jug', position: 42},{style: 'jug', position: 41},{style: 'yellow', position: null},{style: 'yellow', position: null},{style: 'yellow', position: null},{style: 'yellow', position: null},{style: 'yellow', position: null},{style: 'yellow', position: null}],
    [{style: 'red', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: 'red', position: null},{style: 'jug', position: 44},{style: 'yellow jug', position: null},{style: 'yellow jug', position: 40},{style: 'yellow', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: 'yellow', position: null}],
    [{style: 'red', position: null},{style: '', position: null},{style: 'red', position: 200},{style: '', position: null},{style: '', position: null},{style: 'red', position: null},{style: 'jug', position: 45},{style: 'yellow jug', position: null},{style: 'jug', position: 39},{style: 'yellow', position: null},{style: '', position: null},{style: 'yellow', position: 204},{style: '', position: null},{style: '', position: null},{style: 'yellow', position: null}],
    [{style: 'red', position: null},{style: '', position: null},{style: '', position: null},{style: 'red', position: 201},{style: '', position: null},{style: 'red', position: null},{style: 'jug', position: 46},{style: 'yellow jug', position: null},{style: 'jug', position: 38},{style: 'yellow', position: null},{style: '', position: null},{style: '', position: null},{style: 'yellow', position: 205},{style: '', position: null},{style: 'yellow', position: null}],
    [{style: 'red', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: 'red', position: null},{style: 'block jug', position: 47},{style: 'yellow jug', position: null},{style: 'jug', position: 37},{style: 'yellow', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: 'yellow', position: null}],
    [{style: 'red', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'jug', position: 48},{style: 'yellow jug', position: null},{style: 'jug', position: 36},{style: 'yellow', position: null},{style: 'yellow', position: null},{style: 'yellow', position: null},{style: 'yellow', position: null},{style: 'yellow', position: null},{style: 'yellow', position: null}],
    [{style: 'jug', position: 2},{style: 'red jug', position: 1},{style: 'jug', position: 52},{style: 'jug', position: 51},{style: 'jug', position: 50},{style: 'jug', position: 49},{style: 'yellow-red', position: null},{style: 'yellow', position: null},{style: 'yellow-green', position: null},{style: 'jug', position: 35},{style: 'jug block', position: 34},{style: 'jug', position: 33},{style: 'jug', position: 32},{style: 'jug', position: 31},{style: 'jug', position: 30}],
    [{style: 'block jug', position: 3},{style: 'red jug', position: null},{style: 'red jug', position: null},{style: 'red jug', position: null},{style: 'red jug', position: null},{style: 'red jug', position: null},{style: 'red', position: null},{style: 'red', position: null},{style: 'green', position: null},{style: 'green jug', position: null},{style: 'green jug', position: null},{style: 'green jug', position: null},{style: 'green jug', position: null},{style: 'green jug', position: null},{style: 'block jug', position: 29}],
    [{style: 'jug', position: 4},{style: 'jug', position: 5},{style: 'jug', position: 6},{style: 'jug', position: 7},{style: 'block jug', position: 8},{style: 'jug', position: 9},{style: 'red-blue', position: null},{style: 'blue', position: null},{style: 'blue-green', position: null},{style: 'jug', position: 23},{style: 'jug', position: 24},{style: 'jug', position: 25},{style: 'jug', position: 26},{style: 'green jug', position: 27},{style: 'jug', position: 28}],
    [{style: 'blue', position: null},{style: 'blue', position: null},{style: 'blue', position: null},{style: 'blue', position: null},{style: 'blue', position: null},{style: 'blue', position: null},{style: 'jug', position: 10},{style: 'blue jug', position: null},{style: 'jug', position: 22},{style: 'green', position: null},{style: 'green', position: null},{style: 'green', position: null},{style: 'green', position: null},{style: 'green', position: null},{style: 'green', position: null}],
    [{style: 'blue', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: 'blue', position: null},{style: 'jug', position: 11},{style: 'blue jug', position: null},{style: 'jug block', position: 21},{style: 'green', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: 'green', position: null}],
    [{style: 'blue', position: null},{style: '', position: null},{style: 'blue', position: 206},{style: '', position: null},{style: '', position: null},{style: 'blue', position: null},{style: 'jug', position: 12},{style: 'blue jug', position: null},{style: 'jug ', position: 20},{style: 'green', position: null},{style: '', position: null},{style: 'green', position: 202},{style: '', position: null},{style: '', position: null},{style: 'green', position: null}],
    [{style: 'blue', position: null},{style: '', position: null},{style: '', position: null},{style: 'blue', position: 207},{style: '', position: null},{style: 'blue', position: null},{style: 'jug', position: 13},{style: 'blue jug', position: null},{style: 'jug', position: 19},{style: 'green', position: null},{style: '', position: null},{style: '', position: null},{style: 'green', position: 203},{style: '', position: null},{style: 'green', position: null}],
    [{style: 'blue', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: 'blue', position: null},{style: 'blue jug', position: 14},{style: 'blue jug', position: null},{style: 'jug', position: 18},{style: 'green', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: '', position: null},{style: 'green', position: null}],
    [{style: 'blue', position: null},{style: 'blue', position: null},{style: 'blue', position: null},{style: 'blue', position: null},{style: 'blue', position: null},{style: 'blue', position: null},{style: 'jug', position: 15},{style: 'jug block', position: 16},{style: 'jug', position: 17},{style: 'green', position: null},{style: 'green', position: null},{style: 'green', position: null},{style: 'green', position: null},{style: 'green', position: null},{style: 'green', position: null},]
];

const colores = [
    'rojo',
    'verde',
    'amarillo',
    'azul'
]

const Table = ({gamers}) => {
    console.log(gamers);
    const positions = [];
    gamers.forEach((element, index) => {
        element.pieces.forEach(piece => {
            let tempPosition;
            switch (index) {
                case 0:
                    if(piece.position == 0){
                        tempPosition = piece.number == 1 ? 200 : 201
                    }else{
                        tempPosition = piece.position
                    }
                    break;
                case 1:
                    if(piece.position == 0){
                        tempPosition = piece.number == 1 ? 202 : 203
                    }else{
                        tempPosition = piece.position+27
                    }
                    break
                case 2:
                    if(piece.position == 0){
                        tempPosition = piece.number == 1 ? 204 : 205
                    }else{
                        tempPosition = piece.position+42
                    }
                    break
                case 3:
                    if(piece.position == 0){
                        tempPosition = piece.number == 1 ? 206 : 207
                    }else{
                        tempPosition = piece.position+14
                    }
                    break
                default:
                    break;
            }
            positions.push({
                image: `../${colores[index]}${piece.number}.png`,
                position: tempPosition
            })
        }) 
    });

    console.log(positions);

    /*const positions = [
        {
            image: '../rojo1.png',
            position: 20
        },
        {
            image: '../azul2.png',
            position: 12
        }
    ]*/
    return(
        <div className='board-container'>
            <table className='board'>
            {Array.from({ length: 15 }, (_, i1) => (
                <tr>
                    {
                        Array.from({length: 15}, (_,i2) => (
                            <td className={`celda ${mat[i1] ? mat[i1][i2].style : ''}`}>{positions.filter(position => position.position == mat[i1][i2].position).map(ficha => (<img style={{width: '25px'}} src={ficha.image}/>))}</td>
                        ))
                    }
                </tr>
            ))}
            </table>
        </div>
    )
}   

export default Table;