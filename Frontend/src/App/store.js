import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import adminauthreducer from '../features/auth/adminauth'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminauth:adminauthreducer
  },
})