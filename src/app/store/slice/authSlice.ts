import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth } from '../../../shared/api'

export const authorization = createAsyncThunk(
    'auth',
    async () => {
      const response = await auth()
      const data = await response.json()
      return data 
    }
  )

type State = {
    accessToken: string
    loading: boolean
    error: string
}

const initialState: State = {
    accessToken: '',
    loading: false,
    error: '',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(authorization.pending, (state) => {
        state.loading = true
    })
    builder.addCase(authorization.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken
        state.loading = false
    })
    builder.addCase(authorization.rejected, (state, action) => {
        state.loading = false
        if(action.error.message) {
            state.error = action.error.message
        }
    })
  },
})

export default authSlice.reducer