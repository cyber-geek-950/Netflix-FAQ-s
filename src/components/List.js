import React from 'react'

function List(props) {
    return (
        <div>
            <li className="list-item">{props.title} <p className="icon">{props.icon}</p></li>
        </div>
    )
}

export default List
