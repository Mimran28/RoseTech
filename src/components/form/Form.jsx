import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const FormApp= () => (
  <Form
    {...layout}
    name="nest-messages"
    onFinish={onFinish}
   
    style={{width:"100%",textAlign:'center'}}
    validateMessages={validateMessages}
  >
    <Form.Item
    className='font-bold'
      name={['user', 'name']}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input placeholder='Enter Your Email' className='py-2'/>
    </Form.Item>
    <Form.Item
    className='font-bold'
      name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
          required:true
        },
      ]}
    >
      <Input placeholder='Enter Your Name' className='py-2'/>
    </Form.Item>
    
    <Form.Item className='font-bold' name={['user', 'introduction']} label="Message">
      <Input.TextArea rows={6} placeholder='Enter Your Message'/>
    </Form.Item>
    <Form.Item
      wrapperCol={{
        

      }}
      className='text-center'
    >
      <Button type="primary" htmlType="submit" className='font-bold h-10' style={{backgroundColor:'#9b0f29',width:'65%'}}>
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default FormApp;