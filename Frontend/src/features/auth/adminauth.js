import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'


const admin = JSON.parse(localStorage.getItem('admin'))

const initialState = {
  admin: admin ? admin : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}


export const adminlogin = createAsyncThunk(
  'adminauth/login',
  async (admindata, thunkAPI) => {
    try {
      return await authService.adminlogin(admindata)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)



// export const adminLogout = createAsyncThunk('auth/logout',  () => {
//    authService.adminLogout()
// })



export const adminauthSlice = createSlice({
  name: 'adminauth',
  initialState,
  reducers: {
    adminLogout: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
      state.admin = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminlogin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(adminlogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.admin = action.payload
      })
      .addCase(adminlogin.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.admin= null
      })
  },
})

export const { adminLogout } = adminauthSlice.actions
export default adminauthSlice.reducer
