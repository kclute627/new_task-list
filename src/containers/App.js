import React, { Component } from 'react';
import UserInput from '../Components/UserInput/Userinput';
import ListDisplay from '../Components/ListDisplay/ListDisplay';
import DeletedItems from '../Components/DeletedItems/DeletedItems';

import './App.css';

class App extends Component {

  state = {
    toDoList : [],
    offList: [],    
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

  removeHandler = (index, item) => {
    
    const newList = this.state.toDoList.filter(el => el.key !== index )
    const newDel = this.state.toDoList.filter(el => el.key === index )
  
    this.setState({
      toDoList: [...newList],
      offList: [...this.state.offList, {item: item, key: index}] 
    })
  }

  
dateHandler = ()=> {
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;

  return today;
}

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
      remove = {this.removeHandler}
      /> 
      <DeletedItems
      list= {this.state.offList} />
      </div>
     
        
      </div>
    );
  }
}

export default App;
