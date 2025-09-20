import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: []
}

export const getAllProducts = createAsyncThunk('products', async () => {
    try {
        const response = await axios.get('http://localhost:3001/products')
        const products = response.data
        console.log(products);
        return products
    } catch (error) {
        console.error('Xəta baş verdi', error);
    }
})

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload
      })
    }
})

export const { } = productSlice.actions
export default productSlice.reducer