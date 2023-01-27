import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '..'
import { getBonus } from '../../../shared/api'

export const getInfoBonus = createAsyncThunk<any, void, {state: RootState}>(
    'bonus/get',
    async (_, {getState}) => {
        try {
            const { auth } = getState()
            const response = await getBonus(auth.accessToken)
            const data = await response.json()
            return data 
        } catch (error: any) {
            throw error.message
        }
    }
  )

type BonusResponse = {
    typeBonusName: string
    currentQuantity: number
    forBurningQuantity: number
    dateBurning: string
}

type State = {
    data: BonusResponse
    loading: boolean
    error: string
}

const initialState: State = {
    data: {
        typeBonusName: '',
        currentQuantity: 0,
        forBurningQuantity: 0,
        dateBurning: String(new Date())
    },
    loading: false,
    error: '',
}

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getInfoBonus.pending, (state) => {
        state.loading = true
    })
    builder.addCase(getInfoBonus.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.loading = false
    })
    builder.addCase(getInfoBonus.rejected, (state, action) => {
        state.loading = false
        if(action.error.message) {
            state.error = action.error.message
        }
    })
  },
})

export default bonusSlice.reducer