import React from 'react'
import { useState } from 'react'
import useAllProducts from '../../../shoppingMenu/hooks/useAllProducts'
import FullMenuItem from '../../../../components/FullMenuItem/FullMenuItem'
import {
  CategoriesButtons,
  CategoryMenu,
  CollectionCategories,
  LeftArrow,
  RightArrow,
} from './DishesCollection.styles'

export type Foods = {
  id: number
  title: string
  servings: number
  pricePerServing: number
  image: string
  vegetarian: boolean
  vegan: boolean
  glutenFree: boolean
  veryHealthy: boolean
  veryPopular: boolean
  categories?: string
}

function DishesCollection() {
  const allProducts = useAllProducts()

  const [value, setValue] = useState('lunch')
  const [currentPage, setCurrentPage] = useState(1)
  const [dishesPerPage] = useState(6)

  let filteredMenu = allProducts.filter((item) => item.categories === value)

  const indexOfLastPost = currentPage * dishesPerPage
  const indexOfFirstPost = indexOfLastPost - dishesPerPage
  const currentPosts = filteredMenu?.slice(indexOfFirstPost, indexOfLastPost)

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(filteredMenu.length / dishesPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }
  const checkValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (value === e.currentTarget.value) {
      return
    }
    setValue(e.currentTarget.value)
    setCurrentPage(1)
  }

  return (
    <>
      <CollectionCategories>
        <LeftArrow onClick={previousPage} />

        <CategoriesButtons
          value={'breakfast'}
          onClick={checkValue}
          className={value === 'breakfast' ? 'active' : ''}
        >
          Breakfast
        </CategoriesButtons>
        <CategoriesButtons
          value={'lunch'}
          onClick={checkValue}
          className={value === 'lunch' ? 'active' : ''}
        >
          Lunch
        </CategoriesButtons>
        <CategoriesButtons
          value={'dinner'}
          onClick={checkValue}
          className={value === 'dinner' ? 'active' : ''}
        >
          Dinner
        </CategoriesButtons>
        <RightArrow onClick={nextPage} />
      </CollectionCategories>
      <CategoryMenu>
        {allProducts ? (
          currentPosts.map((item) => <FullMenuItem key={item.id} {...item} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </CategoryMenu>
    </>
  )
}

export default DishesCollection
