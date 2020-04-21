import React from 'react';

class HeaderComponent extends React.Component{
    render(){
        return(
            <div id="header">
                <div id="logo">
                    <img src="./yash-logo.png" width="100" ></img>
                </div>
                <div id="navigation">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <span id="clr"></span>
            </div>
           
            
        )
    }

}

export default HeaderComponent;