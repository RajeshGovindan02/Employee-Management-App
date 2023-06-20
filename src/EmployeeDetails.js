// EmployeeDetails.js

import React from 'react';

const EmployeeDetails = ({ employee }) => {
  return (
    <div>
      <h2>Employee Details</h2>
      <p>Name: {employee.name}</p>
      <p>Email: {employee.email}</p>
      <p>Position: {employee.position}</p>
    </div>
  );
};

export default EmployeeDetails;
