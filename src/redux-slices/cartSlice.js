import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: function (state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (itemIndex === -1) {
                // console.log('action.payload.price: ', action.payload.price);
                action.payload.price = action.payload.price || action.payload.defaultPrice / 100;
                action.payload.totalPrice = action.payload.price * 1;
                action.payload.count = 1;
                state.items.push({ ...action.payload });
            } else {
                // console.log('else block: ', action.payload.count);
                // console.log('else block payload: ', action.payload);
                action.payload.count++;
                action.payload.totalPrice = action.payload.price * action.payload.count;
                state.items[itemIndex] = { ...action.payload };
            }

        },
        removeItem: function (state, action) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            state.items = state.items.slice(itemIndex, 1);
        },
        clearCart: function (state, action) {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;