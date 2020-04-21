import React from 'react';
import HeaderComponent from './HeaderComponent';
import SearchComponent from './SearchComponent';
import EmployeeDataComponent from './EmployeeDataComponent';


function IssueTrackerComponent() {
  return (
   <div id="issueContainer">
        <HeaderComponent></HeaderComponent>

        <SearchComponent></SearchComponent>
        
        <div id="data-table" width="800" style={{marginTop:'50px'}}>
           <EmployeeDataComponent></EmployeeDataComponent>
        </div>
   </div>
  );
}

export default IssueTrackerComponent;