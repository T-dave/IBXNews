import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NewsState {
  value:any
}

const initialState: NewsState = {
  value: {}
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})
export const { addData } = newsSlice.actions

export default newsSlice.reducer