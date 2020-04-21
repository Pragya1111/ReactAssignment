import React from 'react';

class CheckEvenOddComponent extends React.Component{
    render(){
        var evenNum = [];
        var oddNum = [];
        this.props.numList.map( (num) => {
            if(num % 2 == 0){
               evenNum.push(num)
            }else {
               oddNum.push(num)
            }
       }
          
       )
        return(
            <div>
                <h4>List of Even Numbers: {evenNum + ' '}</h4>
                <h4>List of Odd Numbers: {oddNum + ' '}</h4>
            </div>
        )
    }
}

export default CheckEvenOddComponent;