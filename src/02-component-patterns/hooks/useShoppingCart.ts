import React, { useState } from 'react'
import { Product, ProductInCart } from '../interfaces/interface'

export const useShoppingCart = () => {

 
  const [shoppingCart, setShoppingCart] = useState<{[key:string]: ProductInCart}>({})

  const onProductCountChange = ({ count, product }:{product: Product, count: number}) => {

    const productInCart:ProductInCart = shoppingCart[product.id] || {...product, count: 0}

    // Add product or  remove product
    if(Math.max(productInCart.count + count, 0) > 0) {
      productInCart.count += count
      setShoppingCart({...shoppingCart, [product.id]: productInCart})

    }else if(Math.max(productInCart.count + count, 0) === 0) {
      const { [product.id]: toDelete, ...rest } = shoppingCart
      setShoppingCart(rest)
    }        
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
