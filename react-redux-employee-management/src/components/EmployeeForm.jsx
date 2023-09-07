


import React, { useState } from 'react';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  paddingLeft:'400px',
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

      
      window.location.href = '/employee-list'; 
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




