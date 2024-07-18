import React from 'react'
import { Table } from 'antd'
import DefaultLayout from './../components/DefaultLayout'
import { useSelector } from 'react-redux'
import { DeleteOutlined,PlusOutlined ,MinusOutlined} from '@ant-design/icons'
const CartPage = () => {

    const {cartItems} = useSelector(state => state.rootReducer)


    const dataSource =
        [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

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
    key: 'price',
  },
  {
    title: 'Quantite',
      dataIndex: '_id',
      render: (id, record) => <div>
          <PlusOutlined />
          <b>{record.quantity}</b>
          <MinusOutlined />
        
    </div>
  
  },
  {
    title: 'Actions',
    dataIndex: '_id',
    render:(id, record)  => <DeleteOutlined />
        }
  
];

  return (
      <DefaultLayout>
          <h2>Cart</h2>


<Table dataSource={cartItems} columns={columns} />;
   </DefaultLayout>
  )
}

export default CartPage

