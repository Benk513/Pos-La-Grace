import React from 'react'
import {Table} from 'antd'
import DefaultLayout from './../components/DefaultLayout'
const CartPage = () => {


    const dataSource = [
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
    key: 'image',
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
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    key: 'actions',
  },
];

  return (
      <DefaultLayout>
          <h2>Cart</h2>


<Table dataSource={dataSource} columns={columns} />;
   </DefaultLayout>
  )
}

export default CartPage

