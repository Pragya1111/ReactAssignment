import React from 'react';


class EmployeeDataComponent extends React.Component{
    render(){
        return(
            
            <tr>
                <td>{this.props.empId}</td>
                <td>{this.props.empName}</td>
                <td>{this.props.empCompany}</td>
            </tr>
        )
    }
}

DatatableComponent.defaultProps = {userEmpCompany:'Employee Company'}

export default EmployeeDataComponent;