import {combineReducers} from '@reduxjs/toolkit';
import authSlice from '@/redux/authReducer';
import appSettingsSlice from '@/redux/appSettingsReducer';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  appSettings: appSettingsSlice.reducer,
});

export default rootReducer;
