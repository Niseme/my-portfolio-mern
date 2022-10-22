import React from 'react'
import {Form, Input} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { showLoading,hideLoading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';

const AdminIntro = () => {
  const dispatch = useDispatch();
  const {portfolioData} = useSelector(state => state.root);
const onFinish = async (values) => {
  try {
    dispatch(showLoading());
    const response = await axios.post('/api/portfolio/update-intro',{
      ...values,
      _id: portfolioData.intro._id
    } );
    if (response.data.success) {
      message.success(response.data.message);
    } else {
      message.error(response.data.message);
    }
  } catch (error) {
    dispatch(hideLoading());
    message.error(error.message);
  }
};

  return (
    <div>
<Form onFinish={onFinish} layout='vertical' initialValues={portfolioData.intro}>
<Form.Item name='welcomeText' label='Welcome Text'>
  <input placeholder="welcomeText" />
</Form.Item>
<Form.Item name='firstName' label='First Name'>
  <input placeholder="Enter your name" />
</Form.Item>
<Form.Item name='lastName' label='Last Name'>
  <input placeholder="Enter your last name" />
</Form.Item>
<Form.Item name='caption' label='Caption'>
  <input placeholder="Enter your caption" />
</Form.Item>
<Form.Item name='description' label='Description'>
  <textarea placeholder="Enter your description" />
</Form.Item>
<div className='flex justify-end'>
  <button className='px-10 py-2 bg-primary text-tertiary' type='submit'>SAVE</button>
</div>
</Form>

    </div>
  )
}

export default AdminIntro