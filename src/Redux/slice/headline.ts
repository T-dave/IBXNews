import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface HeadlineState {
  value:any
}

const initialState: HeadlineState = {
  value: {}
}

export const headlineSlice = createSlice({
  name: 'headline',
  initialState,
  reducers: {
    addHeadline: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})
export const { addHeadline} = headlineSlice.actions

export default headlineSlice.reducer