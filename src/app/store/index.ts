import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import bonusSlice from './slice/bonusSlice'

const store = configureStore({ 
    reducer: {
        auth: authSlice,
        bonus: bonusSlice,
    } 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store