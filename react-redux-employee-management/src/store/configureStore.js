// store/configureStore.js

// store/configureStore.js

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer'; // Import the named export

const store = configureStore({
  reducer: rootReducer, // Use the named export here
  // Add middleware, dev tools configuration, etc., if needed
});

export default store;

