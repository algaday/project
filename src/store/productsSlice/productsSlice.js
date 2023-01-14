import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: null,
}

export const fetchTenProducts = createAsyncThunk(
  'fetchTenProducts',
  async () => {
    try {
      const response = await fetch(
        'https://api.spoonacular.com/recipes/random?number=10&apiKey=1026e89e70cb4466837fe175880bbef9'
      )
      const data = await response.json()
      return data.recipes
    } catch (error) {
      console.log(error)
    }
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTenProducts.fulfilled]: (state, { payload }) => {
      state.value = payload
    },
  },
})

export const { populate } = productsSlice.actions

export default productsSlice.reducer
