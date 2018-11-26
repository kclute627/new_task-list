import React from 'react'




const userInput =(props)=>{


    return(
        <div>
            <h1>Your to-do List</h1>
            <h2>Insert Date </h2>
            <input 
            type="text"
            onChange = {props.change}
            value ={props.value}
            />
            <div>
                <button
                onClick={props.click}>Add to Your List</button>
            </div>
        </div>
    )



}


export default userInput;