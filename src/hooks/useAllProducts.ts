import { useMemo } from 'react'
import { useGetAllProductsQuery } from '../api/products/productsApi'

function useAllProducts() {
  const { data } = useGetAllProductsQuery('100')

  console.log('change happened')

  const allProducts = useMemo(() => {
    let horor = data
      ? data.recipes.map((item) => {
          let categories = ['breakfast', 'lunch', 'dinner']
          let randomNum = Math.floor(Math.random() * categories.length)

          return { ...item, categories: categories[randomNum] }
        })
      : []
    return horor
  }, [data])

  return allProducts
}

export default useAllProducts
