import {configureStore} from "@reduxjs/toolkit"
import cartReducers from "./cartsSlice"
const reducer = {
    carts:cartReducers
}
const store = configureStore({
    reducer:reducer
})

export default store