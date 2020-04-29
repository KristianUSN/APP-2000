import React from 'react'

{/* Kristian START */}

/**Komponent for monster */
const Monster = props => {
    return (
        <div 
            className="monsterBox"
            onClick={() => props.handleAction(props.monsterdata)}
        >
            
            <div className="monster-info">
                <span>{props.monsterdata.name}</span>
                <p>HP {props.monsterdata.health}</p>
                <p>STR {props.monsterdata.strength}</p>
            </div>
            <img src={props.monsterdata.img} alt={props.monsterdata.name} className="box-monster"/>
        </div>
    )
}

{/* Kristian END */}

export default Monster