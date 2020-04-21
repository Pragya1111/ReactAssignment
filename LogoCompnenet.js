import React from 'react';

class LogoComponent extends React.Component{
    render(){
        return(
            <div>
                <p><img src={this.props.user.logoImg}></img></p>
                <h1>Id: {this.props.user.name}</h1>
                <h1>Name: {this.props.user.name}</h1>
                <h3>Scrum Master: {this.props.user.scrumMaster}</h3>
                <h3>Team Members: {this.props.user.teamMember}</h3>
            </div>
            
        )
    }
}

export default LogoComponent;