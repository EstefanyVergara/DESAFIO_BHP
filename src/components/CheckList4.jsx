import React from 'react'
import CompleteCheckList4 from './CompleteCheckList4';
import LifeRopeCondition from './LifeRopeCondition';

const CheckList4 = ({lifeRopeCondition, additionOfLifeRopeConditions}) => {
    const estadoDeCuerdaDeVida = [
        {id:1, pregunta:'¿Pregunta N°1?', respuesta:'no'},
        {id:2, pregunta:'¿Pregunta N°2?', respuesta:'si'},
        {id:3, pregunta:'¿Pregunta N°3?', respuesta:'si'},
        {id:4, pregunta:'¿Pregunta N°4?', respuesta:'no'}, 
        {id:5, pregunta:'¿Pregunta N°5?', respuesta:'si'},
        {id:6, pregunta:'¿Pregunta N°6?', respuesta:'no'},
        {id:7, pregunta:'¿Pregunta N°7?', respuesta:'si'},
        {}
       ];
    
    
    return (
        <div>
            <h2>Verifica si el punto de anclaje cuenta con los siguientes requisitos:</h2>
            <br />
            <h4>Estado de la cuerda de vida</h4>
            <br/>
            <ol> { lifeRopeCondition.length < 8 ?
                lifeRopeCondition.map((condition) => {
                    return(
                          <LifeRopeCondition
                           key={condition.id}
                           condition={condition}
                           additionOfLifeRopeConditions={additionOfLifeRopeConditions}
                           estadoDeCuerdaDeVida={estadoDeCuerdaDeVida}
                            />
                    )
                    }
                    )
                    :
                <CompleteCheckList4
                lifeRopeCondition={lifeRopeCondition}
                additionOfLifeRopeConditions={additionOfLifeRopeConditions}
                />
                }
            </ol>
        </div>
    )
}
export default CheckList4;
