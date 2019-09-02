import React from 'react';

class TodoItem extends React.Component{
    state = {
        selectedTodoId: null,
    }

    changeTodo = (itemId) => {
        this.setState({
            selectedTodoId: itemId,
        })
    }
    render(){
      
        return(
            <div>
                <h1>title {this.state.selectedTodoId}</h1>
                <ul>{
                    this.props.todos.map((item) => {
                        return (
                            <li key={item.id} 
                                onClick={() => {this.changeTodo(item.id)}}
                                className={this.state.selectedTodoId === item.id ? 'active' : ''}
                            >
                                <span>{item.id}</span>
                                <span>{item.title}</span>
                                <input type="checkbox" defaultChecked={item.done}></input>
                            </li>)
                        })
                    } 
                </ul>
            </div>
        )
    }
}

export default TodoItem