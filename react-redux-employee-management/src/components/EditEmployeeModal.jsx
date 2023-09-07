import React from 'react';

const modalStyle = {
  display: 'block',
};

const modalDialogStyle = {
  maxWidth: '800px',
  margin: '20px auto 20px 500px',
  paddingleft:'300px'
};

const formGroupStyle = {
  display: 'flex',
  flexDirection: 'column', 
};

const inputStyle = {
  width: '50%', 
  padding: '8px', 
  marginBottom: '8px', 
  
};

function EditEmployeeModal({
  showEditModal,
  closeModal,
  selectedEmployee,
  handleSave,
  setSelectedEmployee,
}) {
  return (
    <div className={`modal ${showEditModal ? 'show' : ''}`} style={modalStyle} tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" style={modalDialogStyle} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Employee</h5>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group" style={formGroupStyle}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  style={inputStyle}
                  value={selectedEmployee ? selectedEmployee.name : ''}
                  onChange={(e) =>
                    setSelectedEmployee({ ...selectedEmployee, name: e.target.value })
                  }
                />
              </div>
              <div className="form-group" style={formGroupStyle}>
                <label htmlFor="salary">Salary</label>
                <input
                  type="number"
                  className="form-control"
                  id="salary"
                  style={inputStyle}
                  value={selectedEmployee ? selectedEmployee.salary : ''}
                  onChange={(e) =>
                    setSelectedEmployee({ ...selectedEmployee, salary: e.target.value })
                  }
                />
              </div>
              <div className="form-group" style={formGroupStyle}>
                <label htmlFor="department">Department</label>
                <input
                  type="text"
                  className="form-control"
                  id="department"
                  style={inputStyle}
                  value={selectedEmployee ? selectedEmployee.department : ''}
                  onChange={(e) =>
                    setSelectedEmployee({
                      ...selectedEmployee,
                      department: e.target.value,
                    })
                  }
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={closeModal}
            style={{ marginRight: '8px', backgroundColor: '#FF5733', borderColor: '#FF5733' }} // Change background and border color
            >
            Close
            </button>
            &nbsp;
            <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleSave(selectedEmployee)}
            style={{ backgroundColor: '#33FF88', borderColor: '#33FF88' }} // Change background and border color
            >
            Save
            </button>


          </div>
        </div>
      </div>
    </div>
  );
}

export default EditEmployeeModal;



