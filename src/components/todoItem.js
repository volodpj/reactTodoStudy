import React from 'react';

class TodoItem extends React.Component{
    state = {
        todos1: this.props.todos,
        selectedTodoId: null,
    }

    changeTodo = (itemId) => {
    
        this.setState({
            selectedTodoId: itemId,
        })
    };

    changeTodoTitle = (event) => {
        console.log(event.target.value)
       
    }
    render(){
        // const todos = [...this.props.todos]
       
        return(
            <div>
                <h1>title {this.state.selectedTodoId}</h1>
                <ul>{
                    this.state.todos1.map((item) => {
                        return (
                            <li key={item.id} 
                                onClick={() => {this.changeTodo(item.id)}}
                                className={this.state.selectedTodoId === item.id ? 'active' : ''}
                            >
                                <span>{item.id}</span>
                                <span>
                                    
                                    <input 
                                        type="text" 
                                        value={item.title} 
                                        onChange={(event) => {this.changeTodoTitle(event)}}
                                    ></input>
                                </span>
                                <input type="checkbox" checked={item.done} ></input>
                            </li>)
                        })
                    } 
                </ul>
            </div>
        )
    }
}

export default TodoItem