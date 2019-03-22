import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Item from './components/Item';

class App extends Component {

	constructor(props){
		super(props);

		this.state={
			toDoList: [],
			inputField:''
		}
	}

	changeUserInput=(e)=>{
		this.setState({ inputField: e.target.value });
	}

	addToDoList=()=>{
		let newArr= this.state.toDoList;
		newArr.push(new Item(this.state.inputField));
		this.setState({ toDoList: newArr, inputField:'' })
		console.log(this.state.toDoList)
	}

	removeItem=(i)=>{
		let newArr=this.state.toDoList;
		newArr.splice(i,1);
		this.setState({ toDoList: newArr })
	}

	handleToggle=(i)=>{
		if(!this.state.toDoList[i].isDone){
			this.state.toDoList[i].isDone=true
		}else{
			this.state.toDoList[i].isDone=false
		}
		this.setState(this.state)
	}


  render() {
    return (
      <div>
      	<Title />	
      	<ul className='container-list'>
					{this.state.toDoList.map((item,i) =>{
							return(
								<div className='to-do-list' key={i} >
									<li style={{textDecoration: this.state.toDoList[i].isDone ? 'line-through' : ''}} 
											onClick={this.handleToggle.bind(this,i)} >{item.task}</li>
									<button className='delete-btn' 
													onClick={this.removeItem.bind(this,i)} >Delete</button>
								</div>
							);
						})  
					}
				</ul>
				<div className='container-input'>
      		<input className='add-input' 
      					 type='text' 
      					 placeholder='Add new item here...' 
      					 value={this.state.inputField} 
      					 onChange={this.changeUserInput} />
      		
      		<button className='add-btn' 
      						onClick={this.addToDoList} >+</button>
      	</div>
      </div>
    );
  }
}

export default App;
