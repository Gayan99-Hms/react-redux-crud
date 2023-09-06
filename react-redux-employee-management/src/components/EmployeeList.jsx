

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

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
// };

// const contentStyle = {
//   textAlign: 'center',
// };

// function EmployeeList() {
//   const employees = useSelector((state) => state.employees);
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

// export default EmployeeList;
import React, { useEffect, useState } from 'react';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:8080/employees');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEmployees(data);
      } catch (error) {
        console.error('Error fetching employees:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={tableContainerStyle}>
          <table style={tableStyle}>
            <thead>
              <tr style={tableHeaderStyle}>
                <th>Name</th>
                <th>Salary</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td style={tableCellStyle}>{employee.name}</td>
                  <td style={tableCellStyle}>${employee.salary}</td>
                  <td style={tableCellStyle}>{employee.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const tableContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '60vh', 
  padding: '50px',
};

const tableStyle = {
  width: '100%',
  border: '1px solid #ddd',
  borderCollapse: 'collapse',
};

const tableHeaderStyle = {
  backgroundColor: '#f2f2f2',
  padding: '12px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '8px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
};

export default EmployeeList;







