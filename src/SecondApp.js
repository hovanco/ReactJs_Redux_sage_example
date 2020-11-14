import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './redux/products/actions'

const SecondApp = () => {

  const dispatch = useDispatch()

  const [count, setCount] = useState(0)

  const { loading, data, error } = useSelector(state => state.product)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  if (error) {
    return (
      <div>
        {error}
      </div>
    )
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>BOP EM DI</button>
      {data.map((product, index) => <p key={index}>
        {product.name || ""}
      </p>)}
    </div>
  )
}

export default SecondApp