 import DefaultLayout from './../components/DefaultLayout'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'antd'
import {Typography} from 'antd'
import axios from 'axios'
import { Row, Col } from 'antd'
import Item from './../components/Item'
import { useDispatch } from 'react-redux'
import { DeleteOutlined,PlusOutlined ,MinusOutlined, EditOutlined} from '@ant-design/icons'

const Items = () => {

  const [itemsData, setItemsData] = useState([])
  const [addEditModalVisibility, setAddEditModalVisibility] =useState(false)
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
  


  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render :(image,record) => <img src ={image} alt="" height="60" width="60"/>
    },
    {
      title: 'Nom',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Prix',
      dataIndex: 'price',
      
    },
    {
      title: 'Categorie',
      dataIndex: 'category',
      key: 'price',
    },
  
    {
      title: 'Actions',
      dataIndex: '_id',
      render: (id, record) => (<div className='d-flex'>
        <DeleteOutlined />
        <EditOutlined/>
      </div>)
          }
    
  ];
  
 
  
  useEffect(() => {
  getAllItems()
  }, [])


  return (
    <DefaultLayout>
       
      <div className="d-flex justify-content-between">
        <Typography.Title>Produits</Typography.Title>
        <Button
          type='primary'
        onClick={()=>setAddEditModalVisibility(true)}>Ajouter un Produit</Button>
      </div>
      <Table columns={columns} dataSource={itemsData} bordered />
      

      <Modal visible={addEditModalVisibility} title="Add New Item" footer={true}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dignissimos minima reiciendis sequi itaque saepe, non corrupti praesentium provident, similique ducimus quo alias fugiat omnis eveniet numquam et exercitationem! Enim.
      </Modal>
    
    </DefaultLayout>
  )
}

export default Items