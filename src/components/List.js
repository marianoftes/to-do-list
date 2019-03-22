import React from 'react';

const List = (props) => {
	return(
		<div>
			<ul>
					{props.toDoList.map((item,i) =>{
						return(
							<div key={i} >
								<li>{item}</li>
								<button onClick={props.removeItem(i)} >Delete</button>
								<button>Edit</button>
							</div>
						);
					})  
				}
			</ul>
		</div>
	)
}

export default List;