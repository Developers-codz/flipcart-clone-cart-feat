import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  savelater:[]
};

const cartsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartHandler: (state, action) => {
      state.cart = [...state.cart, action.payload];
      console.log(state.cart);
    },
    removeFromCartHandler: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    qtyIncreaseHandler: (state, action) => {
      const newCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.qty += 1;
        }
        return item;
      });
      state.cart = newCart;
    },
    qtyDecreaseHandler: (state, action) => {
      const newCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.qty -= 1;
        }
        return item;
      });
      state.cart = newCart;
    },
    addToSaveLaterHandler: (state,action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload.id)
        if(!state.savelater.find(item => item.id === action.payload.id)){
            state.savelater = [...state.savelater,action.payload]
        }
    },
    removeFromSaveLater:(state,action)=>{
      state.savelater = state.savelater.filter(item => item.id !==action.payload)
    },
    addCartFromSaveHandler:(state,action) =>{
      state.savelater = state.savelater.filter(item => item.id !== action.payload.id)
      if(!state.cart.find(item => item.id === action.payload.id)){
        state.cart = [...state.cart,action.payload]
    }
    }
  },
});

export default cartsSlice.reducer;
export const {
  addToCartHandler,
  removeFromCartHandler,
  qtyIncreaseHandler,
  qtyDecreaseHandler,
  addToSaveLaterHandler,
  removeFromSaveLater,
  addCartFromSaveHandler
} = cartsSlice.actions;
