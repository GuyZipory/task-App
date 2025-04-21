import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '@/redux/authReducer';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export default rootReducer;
