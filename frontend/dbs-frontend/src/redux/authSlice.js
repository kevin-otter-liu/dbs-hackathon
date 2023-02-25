import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: null
  },
  reducers: {
    logout: state => {
      state.value = null
    },
    login: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { logout, login } = authSlice.actions

export default authSlice.reducer