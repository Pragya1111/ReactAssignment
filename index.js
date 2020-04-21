import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import IssueComponent from './IssueTrackerComponent';
import GetNameComponent from './getNameComponent';
import BadgeComponent from './BadgeComponent';
import ProjectManagementComponent from './ProjectManagementComponent';
import * as serviceWorker from './serviceWorker';

var userInfo = {
  logoImg: "./yash-logo.png",
  name: "Sachin Gandhwani",
  userName: "Sachin"
}



ReactDOM.render(
  <React.StrictMode>
    <ProjectManagementComponent></ProjectManagementComponent>
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();