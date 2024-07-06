import React from'react'
import { useState, useEffect } from 'react'
import Imagecard from './components/Card'
import ImageSearch from './components/ImageSearch'

export default function App() {
  const [images,setimages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term,setTerm] = useState('')


  useEffect(() =>  {fetch(`https://pixabay.com/api/?key=44743096-bd43d4dbf3f14da3852874011&q=${term}&image_type=photo&pretty=true`)
            .then(res => res.json())
            .then(data => {
              setimages(data.hits)
              setIsLoading(false)
            })
            .catch(err => console.log(err))}
          ,[term])
  return (
    <>
      <ImageSearch searchText={text => setTerm(text)}/>
        {
          !isLoading && images.length === 0 ? <h1 className='text-3xl text-center text-purple-600'>Sorry no items found 🙁.</h1> : <h1 className='text-3xl text-center text-purple-600 mb-6'>There are {images.length} images found for your search.</h1>
        }
      <div className='grid grid-cols-3 gap-4 mx-auto '>
        {
          isLoading ? <h1 className='text-3xl mr-auto text-purple-600'>Loading...</h1> : images.map(image => <Imagecard key={image.id} image={image}/>)
        }
      </div>
    </>
  )
}