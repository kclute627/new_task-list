import React from 'react'




const userInput =(props)=>{
    
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
      
      if(dd<10) {
          dd = '0'+dd
      } 
      
      if(mm<10) {
          mm = '0'+mm
      } 
      
      today = `${mm}/${dd}/${yyyy}`
      


    return(
        <div>
            <h1>Your to-do List</h1>
            <h2>{today} </h2>
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