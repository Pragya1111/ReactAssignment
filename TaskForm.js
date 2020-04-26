import React from 'react';
const TaskForm = (props)=> {
    return (
        <div>
            <form onSubmit = {props.addTodoStatus}>
            <input type="text" 
            value= {props.currentTodoStatus}
            onChange= {props.updateTodoStatus}
            />
            <button type="submit">Add Item</button> 
            </form>
           
        </div>
    );
}
export default TaskForm;