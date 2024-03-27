import React from 'react'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchProductData } from '../../../redux/actions/productAction'

const index = () => {
  const [products,setProducts] = useState([])
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.products)
  console.log(productData)
  useEffect(()=>{
  dispatch(fetchProductData())
  },[])
  useEffect(()=>{
  setProducts(productData)
  },[productData])
console.log(products)
  return (
    <div className='text-red font-bold-500'>
      Home Page
      {
        products.map((product)=>{
          <Product
            product={product}
            key={product.id}
            handleClick={handleClick}
            isAddToCart={isAddToCart}
          />
        })
      }
    </div>
  )
}

export default index
