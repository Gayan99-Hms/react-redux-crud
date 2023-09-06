// store/employeeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    updateEmployee: (state, action) => {
      const { id, name, salary } = action.payload;
      const employeeToUpdate = state.find((employee) => employee.id === id);
      if (employeeToUpdate) {
        employeeToUpdate.name = name;
        employeeToUpdate.salary = salary;
      }
    },
    deleteEmployee: (state, action) => {
      return state.filter((employee) => employee.id !== action.payload);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;

