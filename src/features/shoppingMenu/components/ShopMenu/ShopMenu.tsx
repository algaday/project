import React, { useState } from 'react'
import { useEffect } from 'react'
import FullMenuItem from '../../../foodsMenu/components/FullMenuItem/FullMenuItem'
import Paginate from '../../../../components/Paginate/Paginate'
import { MenuContainer, MenuWrapper, TotalMenuWrapper } from './ShopMenu.styles'
import { TFoods } from '../../../../api/products/types'
import ShopMenuFilter from '../ShopMenuFilter/ShopMenuFilter'
import useAllProducts from '../../hooks/useAllProducts'

const ShopMenu = () => {
  const allProducts = useAllProducts()
  const [dataForFilter, setDataForFilter] = useState<TFoods[]>([])

  useEffect(() => {
    setDataForFilter(allProducts)
  }, [allProducts])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(12)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = dataForFilter?.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(dataForFilter?.length / postsPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  const filterProductsList = (products: TFoods[]) => {
    setDataForFilter(products)
  }

  return (
    <MenuWrapper>
      <ShopMenuFilter filterProductsList={filterProductsList} />
      <TotalMenuWrapper>
        <MenuContainer>
          {dataForFilter ? (
            currentPosts?.map((item) => (
              <FullMenuItem key={item.id} {...item} />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </MenuContainer>
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={dataForFilter?.length}
          currentPage={currentPage}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </TotalMenuWrapper>
    </MenuWrapper>
  )
}

export default ShopMenu
