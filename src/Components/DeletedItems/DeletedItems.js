import React from 'react';
import '../../containers/App.css';


const deletedItems = (props)=> {

    return(
    <div className = "header-1">
            <h1 >
                Items Checked off the List
            </h1>
            <ul>
                {props.list.map(cur=>{
                    return(
                        <li className="list-item del-item"
                        key={cur.key}>
                        {cur.item}          

                        </li>

                    )
                })}
                
            </ul>

        </div>
    )

    
}



export default deletedItems; 