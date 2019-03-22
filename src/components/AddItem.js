import React from 'react';

const AddItem = (props) =>{
	return(
		<div>
			<form>
				<input value={props.inputField} type='text' placeholder='Add new item here...' onChange={props.changeUserInput} />
				<input type='submit' value='+' onSubmit={props.addToDoList} />
			</form>
		</div>
	)
}

export default AddItem;