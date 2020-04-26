import React from 'react';
import TodoListComponent from './TodoListComponent';
class TaskNameComponent extends React.Component{
    render(){
        return(
            <li onClick= {() => {this.props.clickHandler(this.props.index)}} 
            className={this.props.todoItem.completed?'completed': ''}>{this.props.todoItem.name}
            <button onClick= {(event)=> {
                event.stopPropagation();
                this.props.deleteTodoItem(this.props.index)}} >X</button>
            </li>
        );
    }
}
//ReactDOM.render(<TodoListComponent/>, document.getElementById("root"));
export default TaskNameComponent;