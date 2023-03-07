import { createSlice } from '@reduxjs/toolkit';
import { resetUpdateSuccess, updateProfile } from '../actions/userActions';

export const initialState = {
  loading: false,
  error: null,
  userInfo: JSON.parse(localStorage.getItem('userInfo')) ?? null,
  updateSuccess: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    userLogin: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.userInfo = payload;
    },
    userLogout: (state) => {
      state.loading = false;
      state.error = null;
      state.userInfo = null;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    updateUserProfile: (state, { payload }) => {
      state.userInfo = payload;
      state.updateSuccess = true;
      state.error = null;
      state.loading = false;
    },
    resetUpdate: (state) => {
      state.updateSuccess = false;
    }
  }
});

export const { setLoading, setError, userLogin, userLogout, updateUserProfile, resetUpdate } = userSlice.actions;
export default userSlice.reducer;

export const userSelector = (state) => state.user;
