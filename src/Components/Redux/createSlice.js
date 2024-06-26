import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:'Text',
    initialState:'',
    reducers:{
        setText:(state,action)=> action.payload.toUpperCase(),
    }
})
export const {setText} = slice.actions;
export default slice.reducer;