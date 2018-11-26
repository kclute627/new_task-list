import React, { Component } from 'react';
import UserInput from '../Components/UserInput/Userinput';
import ListDisplay from '../Components/ListDisplay/ListDisplay';
import DeletedItems from '../Components/DeletedItems/DeletedItems';

import './App.css';

class App extends Component {

  state = {
    toDoList : [],
    
    currentTask: '',
  }

  currentTaskHandler =(event)=>{
    let cur = event.target.value;
    this.setState({
      currentTask: cur,
    })

  }


  clickedHandler = () => {

    const newItem = this.state.currentTask;
    const newKey = Math.random()*332;
    
    
    this.setState({
      toDoList: [...this.state.toDoList, {item: newItem, key: newKey }],
      currentTask: '',
    })


  }

  
// dateHandler = ()=> {
//   ///return() find way to return the date
// }

  render() {
    return (
      <div className="App">
      
      <UserInput 
      date={this.dateHandler}
      change={this.currentTaskHandler}
      click={this.clickedHandler}
      value={this.state.currentTask}/>

      <div className='top'>
      <ListDisplay 
      list = {this.state.toDoList}
      /> 
      <DeletedItems />
      </div>
     
        
      </div>
    );
  }
}

export default App;
