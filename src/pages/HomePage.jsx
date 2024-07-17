import React, { useEffect, useState } from 'react'
import DefaultLayout from './../components/DefaultLayout'
import axios from 'axios'
import { Row, Col } from 'antd'
import Item from './../components/Item'

const HomePage = () => {

  const [itemsData, setItemsData] = useState([])
  
  const getAllItems = () => {
    axios.get('http://localhost:5000/api/items/').then((res) => {
    setItemsData(res.data.data)
    console.log(res.data.data)

    if(res.status ===200) console.log('ca marche chez le client')
  }).catch(error => { console.log(error) })
}
 
  
  useEffect(() => {
  getAllItems()
  }, [])

  return (
    <DefaultLayout>
      
      <Row>
        {itemsData.map((item) => {
          
          return <Col span={6}> <Item item={item} /></Col>
              
            })}

      
    </Row>
      

      
       </DefaultLayout>
  )
}

export default HomePage