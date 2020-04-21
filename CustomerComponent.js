import React from 'react';
import ActiveCustomerComponent  from './ActiveCustomerComponent';

var customerDetails = [{
    cusId: 1,
    cusName: "A1",
    cusAddress: "India"
  },
  {
    cusId: 2,
    cusName: "Customer B",
    cusAddress: "India"
  },
  {
    cusId: 3,
    cusName: "Customer C",
    cusAddress: "USA"
  },
  {
    cusId: 4,
    cusName: "Customer4",
    cusAddress: "UK"
  }
  
]

class CustomerComponent extends React.Component{
    render(){
        
        return(
          <div>
          <h1>Customer's View </h1>
          <ActiveCustomerComponent customerList={customerDetails}></ActiveCustomerComponent>

       
          </div>
            
        )
    }
}

export default CustomerComponent;