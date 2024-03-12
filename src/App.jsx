import { useEffect, useState } from 'react'
import './App.css'
import Single from './Componant/Single';

function App() {
  
  const [product,setProduct] = useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res=> res.json())
    .then(data=> setProduct(data))
  },[])


  return (
    <>
      {product.map(product =>(
        <Single key={product.id} product={product}></Single>
      ))}
    </>
  )
}

export default App
