import React from 'react';
import CheckEvenOddComponent from './CheckEvenOddComponent';



class DisplayEvenOddComponent extends React.Component{
    render(){
        let chkNumbers = [23, 40, 13, 12, 10, 5, 6, 50];
        return(
            <div>
                <h2>Listing all Even and Odd numbers from list: {chkNumbers + ' '}</h2>
                <CheckEvenOddComponent numList={chkNumbers}></CheckEvenOddComponent>
            </div>
           
        )
    }
}

export default DisplayEvenOddComponent;