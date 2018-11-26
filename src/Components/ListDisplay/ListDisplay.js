import React from 'react';
import '../../containers/App.css';



const listDisplay = (props)=>{

    
    return(
        
        <div className ="header-1">
            <h1>My List</h1>
            <ul >
                {props.list.map(cur => {
                    return (
                        <li 
                        className ="list-item"
                        key={cur.key}>
                            {cur.item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
    }



export default listDisplay;