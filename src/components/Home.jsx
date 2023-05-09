import '../stylesheets/Home.css'

import imgCentral from '../images/image-product-1.jpg'
import product1 from '../images/image-product-1-thumbnail.jpg'

import product2 from '../images/image-product-2.jpg'
import product2Thumbnail from '../images/image-product-2-thumbnail.jpg'

import product3 from '../images/image-product-3.jpg'
import product3Thumbnail from '../images/image-product-3-thumbnail.jpg'

import product4 from '../images/image-product-4.jpg'
import product4Thumbnail from '../images/image-product-4-thumbnail.jpg'

import { useState } from 'react'

const products = [
  {
    id: 1,
    image: imgCentral,
    imageThumbnail: product1,
  },
  {
    id: 2,
    image: product2,
    imageThumbnail: product2Thumbnail,
  },
  {
    id: 3,
    image: product3,
    imageThumbnail: product3Thumbnail,
  },
  {
    id: 4,
    image: product4,
    imageThumbnail: product4Thumbnail,
  }
]



export const Home = () => {
  
  const [number, setNumber]= useState("0");
  const [selectImage, setSelectImage] =useState(imgCentral)

  const handleThumbnailClick = (thumbnail) => {
    setSelectImage(thumbnail)
  }

  return (
    <section>
      <div className="container">

    <div className="figure">

    <figure className="figure-central">
      <img src={selectImage} />
    </figure>

      <ul className='detalhes'>
        {
          products.map((thumbnail, index) => 
          <li key={index} onClick={() => handleThumbnailClick(thumbnail.image)}>
            <img src={thumbnail.imageThumbnail} alt="" />
          </li>
          )
        }  
      </ul>

    </div>

    <div className="content">

    <h1>Sneaker Company</h1>
    <h2>Fall Limited Edition Sneakers</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolorum quasi modi deleniti laborum incidunt nisi unde ut itaque velit illo voluptas repellat possimus</p>

    <div className="sales">

    <span className='sale'>$125.00</span>
    
    <span className='old-sale'>$250.00</span>

    </div>

    <div className="add">

      <div className="counter">
        <button className='botao-counter' onClick={()=> setNumber((number) => number > 0 ? number - 1 : 0)}>-</button>
        <span>{number}</span>
        <button className='botao-counter' onClick={() => setNumber((number) => number + 1) }>+</button>
      </div>

        <button className='cart-add'>
        <img src="" alt="" />
        Add to cart
        </button>

    </div>

    </div>

      </div>
    </section>
  )
}
