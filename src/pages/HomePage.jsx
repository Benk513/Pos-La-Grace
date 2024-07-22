import React, { useEffect, useState } from 'react'
import DefaultLayout from './../components/DefaultLayout'
import axios from 'axios'
import { Row, Col, } from 'antd'
 
import Item from './../components/Item'
import { useDispatch } from 'react-redux'

const HomePage = () => {

  const [itemsData, setItemsData] = useState([])

  const [selectedCategory , setSelectedCategory] = useState('fruits')
  const categories = [
    {
      name: "fruits",
      image: "https://th.bing.com/th/id/OIP.deix5a89eBlJW7ZtfwfovAHaFb?w=249&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      name: "legumes",
      image: "https://th.bing.com/th/id/OIP.deix5a89eBlJW7ZtfwfovAHaFb?w=249&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
      name: "viandes",
      image: "https://th.bing.com/th/id/OIP.deix5a89eBlJW7ZtfwfovAHaFb?w=249&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
  ]




  const dispatch = useDispatch()

  const getAllItems = () => {

    dispatch({type:'SHOW_LOADING'})


    axios.get('http://localhost:5000/api/items/').then((res) => {
      dispatch({ type: 'HIDE_LOADING' })
    setItemsData(res.data.data)
    console.log(res.data.data)

    if(res.status ===200) console.log('ca marche chez le client')
    }).catch(error => {
      console.log(error)
      dispatch({ type: 'HIDE_LOADING' })
    })
}
 
  
  useEffect(() => {
  getAllItems()
  }, [])

  return (
    <DefaultLayout>
      
      <div className='d-flex flex-row mb-3 gap-5'>
        {categories.map((category) => {
          return <div
            onClick={() => {setSelectedCategory(category.name)}}
            className={`d-flex mx-10 text-info ${selectedCategory === category.name && 'success'}`}>
            <h5 className={`d-flex mx-10  ${selectedCategory === category.name ? 'text-success' :'text-dark'} `}> {category.name }</h5>
       
        </div>
        })}
        

      </div>
      
      <Row>
        {itemsData.filter((i) => i.category === selectedCategory).map((item) => {
          
          return <Col span={6}> <Item item={item} /></Col>
              
            })}

      
    </Row>
      

      
       </DefaultLayout>
  )
}

export default HomePage