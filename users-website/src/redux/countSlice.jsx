import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    newCount: 0
};

const countSlice= createSlice({
 name:"count",
initialState:initialState,
reducers:{
    increaseMyCount: (state)=>{
        state.newCount ++ // or  state.newCount += 1
        // if you want to update at a frequency greter then 1 e.g by 2
        // state.newCount += 2
    },
    decreaseMyCount: (state)=>{
        if(state.newCount >0){
             state.newCount --
        }
    },
    increaseCountByAnyValue: (state, action)=>{
      state.newCount += action.payload
    },

      decreaseCountByAnyValue: (state, action)=>{
        if(state.newCount >0){
             state.newCount -= action.payload
        }
      
    }
}
});

export const {increaseMyCount, decreaseMyCount, increaseCountByAnyValue, decreaseCountByAnyValue} = countSlice.actions;

export default countSlice.reducer;