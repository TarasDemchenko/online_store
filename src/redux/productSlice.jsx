import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  searchTerm: '',
  filterData: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      state.filteredData = state.products.filter(prodact =>
        prodact.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export const selectProducts = state => state.product.products;
export const filterProducts = state => state.prodact.searchTerm;
export const filteredDataProducts = state => state.prodact.filterData;

export default productSlice.reducer;
