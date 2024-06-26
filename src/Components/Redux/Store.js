import {configureStore} from '@reduxjs/toolkit';
import uday from '../Redux/createSlice'
 const store = configureStore({
    reducer:{
        text:uday,
    }
});
 
export default store
