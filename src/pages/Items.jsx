 import DefaultLayout from './../components/DefaultLayout'
import React, { useEffect, useState } from 'react'
import { Button, Modal, Table,Checkbox, Form, Input  } from 'antd'
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
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
      </Modal> 
    
    </DefaultLayout>
  )
}

export default Items





