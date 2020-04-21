import React from 'react';

class GetNameComponent extends React.Component{
    render(){
        return(
            <div>Hello {this.props.name}</div>
        )
    }
}

export default GetNameComponent;