import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import countReducer from './countSlice';

export const store = configureStore({
  reducer: { users: userReducer , count: countReducer }
});
