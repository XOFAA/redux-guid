import { createSlice } from "@reduxjs/toolkit";

const initialState={
    logado:false
}

const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        logar:(state,action)=>{
            state.logado=true
        },
        logout:(state,action)=>{
            state.logado=null
        }
    }
})

export const {logar,logout}=userSlice.actions
export const selectUser=(state)=>state.user.logado
export default userSlice.reducer