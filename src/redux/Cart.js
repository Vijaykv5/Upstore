import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state,action)=>{
            state.items.push(action.payload);
        },
        deleteItem:(state,action)=>{
            state.items.pop(action.payload);
        },
        clearCart:(state)=>{
            state.items=[];
        }
    }
});

export default cartSlice.reducer;
export const {addItem,clearCart}=cartSlice.actions;