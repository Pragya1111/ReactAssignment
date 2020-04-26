import React from 'react';
import TaskNameComponent from './TaskNameComponent';
import TaskForm from './TaskForm';
class TodoListComponent extends React.Component{
    constructor(props){
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTodoStatus = this.updateTodoStatus.bind(this);
        this.addTodoStatus = this.addTodoStatus.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
        this.state = {
            todoList : [{name:"TodoList", completed:false},
                        {name:"Gym", completed:false},
                        {name:"Morning Walk", completed:true}],
            currentTodoStatus: ''                         
        }
    }
    deleteTodoItem(itemToBeDeleted){
        let todoList = this.state.todoList;
        todoList.splice(itemToBeDeleted, 1);
        this.setState({
            todoList 
        });
    }
    addTodoStatus(event){
        event.preventDefault();
        let todoList = this.state.todoList;
        let currentTodoStatus = this.state.currentTodoStatus;
        todoList.push({
             name:currentTodoStatus,
             completed: false
        });
        this.setState({
            todoList: todoList,
            currentTodoStatus: ''
        });
    }
    updateTodoStatus(newValue) {
        this.setState({
            currentTodoStatus: newValue.target.value
        }) ;
    }
    changeStatus(index){
        var todoList = this.state.todoList;
        var todoItem = todoList[index];
        todoItem.completed = ! todoItem.completed;
        this.setState({
            todoList: todoList
        });
        console.log(this.state.todoList[index]);

    }
    render(){
        return(
            <div>
                <h1> Task Management System</h1>
                <hr/>
                <section>
                    <TaskForm
                    currentTodoStatus ={this.state.currentTodoStatus}
                    updateTodoStatus = {this.updateTodoStatus}
                    addTodoStatus = {this.addTodoStatus}
                   />
                </section>

            <ul>
                {this.state.todoList.map((todoItem, index)=> {                  
                
                    return <TaskNameComponent
                             key={todoItem.name} 
                             todoItem= {todoItem} 
                             index= {index}
                            clickHandler = {this.changeStatus}
                            deleteTodoItem = {this.deleteTodoItem}/>
                 })} 
            </ul>
            </div>
        );
    }
}
export default TodoListComponent;