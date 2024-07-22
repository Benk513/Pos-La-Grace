import React from 'react'
import { Button, Col, Form, Input, message, Row } from 'antd'
import './../resources/authentication.css'
import { Link } from 'react-router-dom'
const Register = () => {
 

    const onFinishFailed = () => {
        console.log('display message !!')
    }
    const onFinish = () => {
        console.log('display message !!')
    }

  return (
      <div className='authentication'>
          <Row>
              <Col lg={8} xs={22}>
                  <Form
           
           layout='vertical'
           name="basic"      
      initialValues={ null}
     onFinish={onFinish}
     onFinishFailed={onFinishFailed}
     autoComplete="off"
                  >
                      <h1>Shop La Grace</h1>
                      <hr />
                      <h3>S'enregistrer</h3>
     <Form.Item
       label="Nom  "
       name="name"
       rules={[
         {
           required: true,
           message: 'Inserez le nom!',
         },
       ]}
     >
       <Input />
                      </Form.Item>
                      

     <Form.Item
       label="Nom d'Utilisateur"
       name="userId"
       rules={[
         {
           required: true,
           message: 'Inserez le nom d\'utlisateur !',
         },
       ]}
     >
       <Input />
     </Form.Item>
  
     <Form.Item
       label="Mot de Passe"
       name="password"
       rules={[
         {
           required: true,
           message: 'Inserez le mot de passe !',
         },
       ]}
     >
       <Input type='password'/>
           </Form.Item>
     
     <Form.Item
       wrapperCol={{
         offset: 8,
         span: 16,
       }}
     >
       <Button type="primary" htmlType="submit">
         S"enregistrer
       </Button>
     </Form.Item>
                  </Form>
                  <Link>Deja Enregistré ? Cliquez ici pour se connecter</Link>
              </Col>
          </Row>


    </div>
  )
}

export default Register
