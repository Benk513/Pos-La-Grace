 import DefaultLayout from './../components/DefaultLayout'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table,Checkbox, Form, Input, Select  } from 'antd'
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
  


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
   

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
      

      <Modal onCancel={()=>setAddEditModalVisibility(false)} visible={addEditModalVisibility} title="Add New Item" footer={true}>
        <Form
          layout='vertical'
    name="basic"
     
    
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Nom du Produit"
      name="name"
      rules={[
        {
          required: true,
          message: 'Inserez le nom du produit !',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Prix du Produit "
      name="price"
      rules={[
        {
          required: true,
          message: 'Inserez le prix du produit !',
        },
      ]}
    >
      <Input />
          </Form.Item>
          
    <Form.Item
      label="L'URL Image du Produit"
      name="image"
      rules={[
        {
          required: true,
          message: 'Inserez l\'image du produit !',
        },
      ]}
    >
      <Input />
    </Form.Item>
 
    <Form.Item
      label="Categorie du Produit"
      name="category"
      rules={[
        {
          required: true,
          message: 'Inserez l\'image du produit !',
        },
      ]}
    >
            <Select>
              <Select.Option value='fruits'>Fruits</Select.Option>
              <Select.Option value='legumes'>Legumes</Select.Option>
              <Select.Option value='meat'>Viande</Select.Option>
      </Select>
    </Form.Item>

         

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Ajouter
      </Button>
    </Form.Item>
  </Form>
      </Modal> 
    
    </DefaultLayout>
  )
}

export default Items





