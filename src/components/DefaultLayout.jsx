import React, { useEffect } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined,ShoppingCartOutlined } from '@ant-design/icons';
import {theme, Breadcrumb ,Typography ,Layout,Menu} from "antd";
import { useSelector } from 'react-redux';
 

const { Header, Content, Sider } = Layout;
const items1 = ['Home', 'Bills', 'Items', 'Customers' ,'Logout'].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});


const App = (props) => {

  const { cartItems } = useSelector(state => state.rootReducer)
  

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  },[cartItems])

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
          
    <Typography.Title
        
        level={3}
        style={{
          margin: 0,background: colorBgContainer,
        }}
              >La Grace
                  
        </Typography.Title>
        


        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={window.location.pathname}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />

<ShoppingCartOutlined   
        level={3}
        style={{
          margin: 5, background: colorBgContainer,
        
        }}/>

<Typography.Paragraph
        
        level={3}
        style={{
          margin: 0,background: colorBgContainer,
        }}
              >{cartItems.length}</Typography.Paragraph>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
           
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;