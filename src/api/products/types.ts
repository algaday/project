export type TFoods = {
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
}

export type Response = {
  recipes: TFoods[]
}
