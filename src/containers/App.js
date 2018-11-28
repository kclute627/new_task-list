import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

App.propTypes = {
  remove: PropTypes.func,
  list: PropTypes.array,
  
  date: PropTypes.string,
  value: PropTypes.func,
  

}

export default App;
