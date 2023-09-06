// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

// const employeesData = [
//   { id: 1, name: 'John Doe', salary: '50000', department: 'IT' },
//   { id: 2, name: 'Jane Smith', salary: '60000', department: 'HR' },
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

// function EmployeeForm() {
//   const { id } = useParams();
//   const employee = employeesData.find((emp) => emp.id === parseInt(id)) || { name: '', salary: '', department: '' };

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
//           <div>
//             <label htmlFor="department">Department:</label>
//             <input
//               type="text"
//               id="department"
//               name="department"
//               value={formData.department}
//               onChange={handleInputChange}
//             />
//           </div>
//           <button
//             type="submit"
//             style={{
//               margin: '10px',
//               padding: '8px 16px',
//               backgroundColor: 'blue',
//               color: 'white',
//               border: 'none',
//               borderRadius: '4px',
//               cursor: 'pointer',
//             }}
//           >
//             {id ? 'Update' : 'Add'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default EmployeeForm;


import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

const formStyle = {
  width: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
};

const inputStyle = {
  width: '100%',
  marginBottom: '10px',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '3px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: 'blue',
  color: 'white',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
};

function EmployeeForm() {
  const [formData, setFormData] = useState({ name: '', salary: '', department: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // After successfully adding an employee, change the URL or perform any other actions
      window.location.href = '/employee-list'; // Redirect to '/employee-list'
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center' }}>Add Employee</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            required
            style={inputStyle}
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Add
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;




