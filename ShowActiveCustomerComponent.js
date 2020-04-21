import React from 'react';

class ShowActiveCustomerComponent extends React.Component{
    render(){
        return(
            <div id="customer-details">
                {this.props.customerList.filter(function(customer){
                    if(customer.cusName.startsWith("A") && customer.cusAddress.startsWith("India")){
                        return customer
                    }
                    }).map(function(customer){
                        return <div>Id: {customer.cusId} | Name: {customer.cusName} | Address: {customer.cusAddress}</div>
                    })
                }

            </div>
        )
    }
}

export default ShowActiveCustomerComponent;