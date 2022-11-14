import { useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [products, setProducts] = useState()

  const fetchData = () => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }
  useEffect(() => fetchData(), []);

  return (
    <>
      <h1>Hello World</h1>
      {products?.map((products, index) => (
        <Card key={index} name={products.fields.name} descripton={products.fields.descripton} image={products.fields.productImage.fields.file.url} />
      )
      )}
    </>
  )
}
