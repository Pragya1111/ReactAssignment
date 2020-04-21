import React from 'react';
import HeaderComponent from './HeaderComponent';
import EmployeeDataComponent from './EmployeeDataComponent';
import DisplayEvenOddComponent from './DisplayEvenOddComponent';
import CustomerComponent from "./CustomerComponent";

var userDetails = [{
    EmpId: 169157,
    EmpName: "Employee Name1",
    EmpCompany: "Employee Company"
  },
  {
    EmpId: 169159,
    EmpName: "Employee Name2",
    EmpCompany: "Employee Company"
  },
  {
    EmpId: 169160,
    EmpName: "Employee Name3",
    EmpCompany: "Employee Company"
  }
]

class ProjectManagementComponent extends React.Component{
    render(){
        return (
            <div id="container">
                <HeaderComponent></HeaderComponent>

                <div id="data-table" width="800" style={{marginTop:'50px'}}>
                    <h3>Employee Details</h3>
                        <table cellPadding="4" cellSpacing="4" border="1">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Scrum Master</th>
                                </tr>
                            </thead>

                            <tbody>
                            { userDetails.map( (el, index) => { return <EmployeeDataComponent key={el.EmpId} userEmp={el.EmpId} userEmpName={el.EmpName}></EmployeeDataComponent> })}
                            </tbody>
                    </table>
                </div>    

                <DisplayEvenOddComponent></DisplayEvenOddComponent>

                <CustomerComponent></CustomerComponent>

            </div>

            
        )
    }
}

export default ProjectManagementComponent;