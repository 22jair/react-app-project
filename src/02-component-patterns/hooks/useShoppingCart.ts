import React, { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interface'

export const useShoppingCart = () => {

 
  const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({})

  const onProductCountChange = ({ count, product }:{product: Product, count: number}) => {

    const productInCart:ProductInCart = shoppingCart[product.id] || {...product, count: 0}

    console.log("COUNT", count)

    if(count === 0) {
      const { [product.id]: toDelete, ...rest } = shoppingCart
      setShoppingCart(rest)
    }else{
      setShoppingCart({...shoppingCart, [product.id]: { ...productInCart, count }})
    }
                
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
