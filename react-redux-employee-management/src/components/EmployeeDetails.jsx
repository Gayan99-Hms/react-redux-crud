// // src/components/EmployeeDetail.jsx
// import React from 'react';
// import { connect } from 'react-redux';
// import { Link, useParams } from 'react-router-dom';

// function EmployeeDetail({ employees }) {
//   const { id } = useParams();
//   const employee = employees.find((employee) => employee.id === id);

//   if (!employee) {
//     return <div>Employee not found</div>;
//   }

//   return (
//     <div>
//       <h1>Employee Detail</h1>
//       <p>Name: {employee.name}</p>
//       <p>Email: {employee.email}</p>
//       <Link to="/">Back to Employee List</Link>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   employees: state.employee.employees,
// });

// export default connect(mapStateToProps)(EmployeeDetail);
