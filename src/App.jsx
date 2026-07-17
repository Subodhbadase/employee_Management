import React, { useContext, useEffect, useState } from 'react';


import { Login } from './conponents/Auth/Login';
import { EmployeeDashboard } from './conponents/Dashboards/EmployeeDashboard';
import { AdminDashboard } from './conponents/Dashboards/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';


const App = () => {
  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  }, []);


  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)

  useEffect(() => {
    const syncLoggedInUser = () => {
      if (userData) {
        const loggedInUser = localStorage.getItem('loggedInUser')
        if (loggedInUser) {
          const parsedUser = JSON.parse(loggedInUser)
          setUser(parsedUser.role)
          setLoggedInUserData(parsedUser.data)
        }
      }
    };

    syncLoggedInUser();
    window.addEventListener('employee-data-updated', syncLoggedInUser);

    return () => {
      window.removeEventListener('employee-data-updated', syncLoggedInUser);
    };
  }, [userData])

  const handleLogin = (email, password) => {
    if (email == "admin@example.com" && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    } else if (userData) {
      const employee = userData.employees.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee',data:employee }))
      }
    } else {
      alert('envalid user');
    }
  }



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null)}
    </>
  )
}

export default App