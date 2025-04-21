import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '@/types';

type AuthState = {
  user: User;
};

const initialState: AuthState = {
  user: {
    email: '',
    uid: '',
    defaultLanguage: 'en',
  },
};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = initialState.user;
    },
  },
});

export const {setUser, logout} = authSlice.actions;
export default authSlice;
