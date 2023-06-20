// App.js

import React, { useState } from 'react';
import './Register.css';
import './Login.css';
import './EmployeeTable.css';
import './EmployeeDetails.css';
import Register from './Register';
import Login from './Login';
import EmployeeTable from './EmployeeTable';
import EmployeeDetails from './EmployeeDetails';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleLogin = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
  };

  const employees = [
    { id: 1, name: 'Adhiyaman G', email: 'adhiyamanhr@gmail.com', position: 'HR' },
    { id: 2, name: 'Rajesh G', email: 'rajeshgvr02@gmail.com', position: 'Designer' },
    { id: 3, name: 'Ragunath SM', email: 'raghunath1771@gmail.com', position: 'Developer' },
  ];

  return (
    <div>
      {loggedIn ? (
        selectedEmployee ? (
          <EmployeeDetails employee={selectedEmployee} />
        ) : (
          <EmployeeTable employees={employees} onEmployeeSelect={handleEmployeeSelect} />
        )
      ) : (
        <>
          <Register />
          <Login onLogin={handleLogin} />
        </>
      )}
    </div>
  );
};

export default App;
