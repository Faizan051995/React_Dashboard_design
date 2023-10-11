import React from 'react'
import '../src/App.css'
import { Col, Image, Layout, Menu, Row } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import rendomImage from "./images/rendomimage.png"
import DashboardLayout from './components/DashboardLayout';
const { Sider, Content } = Layout;

function App() {
  return (
    <>

<DashboardLayout/>
    </>
  )
}

export default App