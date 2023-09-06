// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';


// const employeesData = [
//   { id: 1, name: 'John Doe', salary: '50000' },
//   { id: 2, name: 'Jane Smith', salary: '60000' },

// ];

// const containerStyle = {
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'flex-start', 
//   alignItems: 'center', 
//   minHeight: '100vh',
//   paddingLeft: '500px', 
//   paddingRight: '20px', 
// };
// const contentStyle = {
//   textAlign: 'center',
// };

// function EmployeeList() {
//   return (
//     <div style={containerStyle}>
//       <div style={contentStyle}>
//         <h2>Employee List</h2>
//         <ul>
//           {employeesData.map((employee) => (
//             <li key={employee.id}>
//               <Link to={`/edit/${employee.id}`}>{employee.name}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// function EmployeeForm() {
//   const { id } = useParams();
//   const employee = employeesData.find((emp) => emp.id === parseInt(id)) || { name: '', salary: '' };

//   const [formData, setFormData] = useState(employee);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <div style={containerStyle}>
//       <div style={contentStyle}>
//         <h2>{id ? 'Edit Employee' : 'Add Employee'}</h2>
//         <form>
//           <div>
//             <label htmlFor="name">Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="salary">Salary:</label>
//             <input
//               type="text"
//               id="salary"
//               name="salary"
//               value={formData.salary}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button
//   type="submit"style={{
//     margin: '10px', 
//     padding: '8px 16px', 
//     backgroundColor: 'blue', 
//     color: 'white', 
//     border: 'none', 
//     borderRadius: '4px', 
//     cursor: 'pointer', 
//   }}
// >
//   {id ? 'Update' : 'Add'}
// </button>
//         </form>
//       </div>
//     </div>
//   );
// }


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<EmployeeList />} />
//         <Route path="/add" element={<EmployeeForm />} />
//         <Route path="/edit/:id" element={<EmployeeForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore'; 
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeForm />} />
          <Route path="/employees" element={<EmployeeList />} /> 
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;







