import React from 'react';
class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            headerText : "Task Management System",
            logo : "TMS"
        }
    }
    render(){
        return(
            <div>
               <h1>{this.state.headerText} </h1>
               <h1>{this.state.logo} </h1>
            </div>
        );
    }
}
export default HeaderComponent;