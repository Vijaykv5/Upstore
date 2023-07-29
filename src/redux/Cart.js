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
        deleteItem: (state, action) => {
            const itemId = action.payload;
            state.items = state.items.filter(item => item._id !== itemId);
          },
          incrementQuantity: (state, action) => {
            const itemId = action.payload._id;
            const item = state.items.find(item => item._id === itemId);
            if (item) {
              item.quantity += 1;
            }
          },
          decrementQuantity: (state, action) => {
            const itemId = action.payload._id;
            const item = state.items.find(item => item._id === itemId);
            if (item && item.quantity > 1) {
              item.quantity -= 1;
            }
          },
        clearCart:(state)=>{
            state.items=[];
        }
    }
});

export default cartSlice.reducer;
export const {addItem,deleteItem,clearCart}=cartSlice.actions;