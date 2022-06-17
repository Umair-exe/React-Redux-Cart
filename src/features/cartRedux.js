import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cartItems')) || [],
    },
    reducers: {
        addToCart: (state, action) => {

            let index = state.cart.findIndex(e => e.id === action.payload.id); // id should be unique.
            if (index !== -1) {
                state.cart[index].quantity = state.cart[index].quantity + action.payload.quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.cart));

            }
            else {

                let item = { ...action.payload, quantity: action.payload.quantity };
                state.cart.push(item);
                localStorage.setItem("cartItems", JSON.stringify(state.cart));

            }
        },
        incrementCart: (state, action) => {
            let index = state.cart.findIndex(e => e.id === action.payload.id); // id should be unique.
            state.cart[index].quantity = state.cart[index].quantity + 1;
            localStorage.setItem('cartItems', JSON.stringify(state.cart));

        },
        decrementCart: (state, action) => {
            let index = state.cart.findIndex(e => e.id === action.payload.id); // id should be unique.
            state.cart[index].quantity = state.cart[index].quantity -1 ;
            localStorage.setItem('cartItems', JSON.stringify(state.cart));

        },
        deleteFromCart: (state, action) => {
            const items = state.cart.filter(item => item.id !== action.payload);
            state.cart = items;
            localStorage.setItem('cartItems', JSON.stringify(state.cart))

        }
    }

});

export const { addToCart, deleteFromCart,incrementCart,decrementCart } = cartSlice.actions;





export default cartSlice.reducer;
