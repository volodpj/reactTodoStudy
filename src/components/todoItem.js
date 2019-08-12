import React from 'react';

class TodoItem extends React.Component{
    render(){
        return(
            <ul>{
                this.props.todos.map((item) => {
                    return <li>
                                <span>{item.id}</span>
                                <span>{item.title}</span>
                                <input type="checkbox" checked={item.done}></input>
                    
                            </li>
                    })
                } 
            </ul>
           
        )
    }
}

export default TodoItem