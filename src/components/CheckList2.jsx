import React from 'react'
import CompleteCheckList2 from './CompleteCheckList2';
import AccessoriesCondition from './AccessoriesCondition';

const CheckList2 = ({accessoriesCondition, additionOfAccessoriesConditions}) => {
    const estadoDeAccesorios = [
        {id:1, pregunta:'¿Los anillos en D presentan deformaciones?', respuesta:'no'},
        {id:2, pregunta:'¿Están las hebillas en buen estado?', respuesta:'si'},
        {id:3, pregunta:'¿Mantiene los elementos plásticos?', respuesta:'si'},
        {id:4, pregunta:'¿Los elementos plásticos están en buen estado?', respuesta:'si'}, 
        {}
       ];
    
    
    return (
        <div>
            <h2>Verifica si el punto de anclaje cuenta con los siguientes requisitos:</h2>
            <br />
            <h4>Estado de los accesorios</h4>
            <br/>
            <ol> { accessoriesCondition.length < 5 ?
                accessoriesCondition.map((condition) => {
                    return(
                          <AccessoriesCondition
                           key={condition.id}
                           condition={condition}
                           additionOfAccessoriesConditions={additionOfAccessoriesConditions}
                           estadoDeAccesorios={estadoDeAccesorios}
                            />
                    )
                    }
                    )
                    :
                <CompleteCheckList2
                accessoriesCondition={accessoriesCondition}
                additionOfAccessoriesConditions={additionOfAccessoriesConditions}
                />
                }
            </ol>
        </div>
    )
}
export default CheckList2;

