

import React, { useEffect, useState } from 'react';
import EditEmployeeModal from './EditEmployeeModal'; 


function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  

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

  const handleUpdate = (employee) => {
    setSelectedEmployee(employee);
    setShowEditModal(false);



    // window.location.href = `/employee-edit/${employee.id}`;
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/employees/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Delete request failed');
      }

      // Remove the employee from the state
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  const closeModal = () => {
    setShowEditModal(true);
  };

  const handleSave = async (updatedEmployee) => {
    try {
      const response = await fetch(`http://localhost:8080/employees/${updatedEmployee.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedEmployee),
      });

      if (!response.ok) {
        throw new Error('Update request failed');
      }

      // Update the employee in the state
      setEmployees((prevEmployees) =>
        prevEmployees.map((employee) =>
          employee.id === updatedEmployee.id ? updatedEmployee : employee
        )
      );

      closeModal();
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div style={textContainerStyle}>
      <h2 className="mb-4">Employee List</h2>
  </div>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td style={tableCellStyle}>{employee.name}</td>
                  <td style={tableCellStyle}>${employee.salary}</td>
                  <td style={tableCellStyle}>{employee.department}</td>
                  <td style={tableCellStyle}>
                    <button onClick={() => handleUpdate(employee)}>Edit</button>
                    <button onClick={() => handleDelete(employee.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Employee Modal */}
      <EditEmployeeModal
      showEditModal={showEditModal}
      closeModal={closeModal}
      selectedEmployee={selectedEmployee}
      handleSave={handleSave}
      setSelectedEmployee={setSelectedEmployee}
    />
    </div>
  );
}
const textContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:'500px'
  };
const tableContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: '500px',
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







