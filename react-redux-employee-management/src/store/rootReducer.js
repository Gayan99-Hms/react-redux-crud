
import { combineReducers } from 'redux';
import { addEmployee, updateEmployee, deleteEmployee } from './employeeSlice'; 

const employeeReducer = combineReducers({
  
  list: [], 
});

const rootReducer = combineReducers({
  employees: employeeReducer,
  
});

export { rootReducer }; 
