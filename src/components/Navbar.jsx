import React, {useState, useEffect} from 'react'
import {Button, Menu, Typography, Avatar} from 'antd'
import { BrowserRouter, Link} from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, FundOutlined, MenuOutlined, ContactsOutlined} from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'
import '../style/style.css';


const Navbar = () => {

const [activeMenu, setActiveMenu] = useState(true);
const [screenSize, setScreenSize] = useState(null);

  useEffect(()=>{
    const handleResize = () =>setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize) 
  },[])

  useEffect(()=>{
    if(screenSize < 768){
      setActiveMenu(false);
    }else{
      setActiveMenu(true)
    }
  },[screenSize])

  return (
    <div className='nav-container'>
      <div className="logo-container">
        <Avatar src={icon} size="large"/>
        <Typography.Title level={2} className='logo'>
            <Link to='/'>Cryptube</Link>
        </Typography.Title>
        <Button className='menu-control-container' onClick={()=> setActiveMenu(!activeMenu)}>
        <MenuOutlined/>
        </Button>
      </div>
      {activeMenu && (
      <Menu theme='dark'>
        <Menu.Item className='icon' icon={<HomeOutlined/>}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item className='icon' icon={<FundOutlined/>}>
          <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item className='icon' icon={<MoneyCollectOutlined/>}>
          <Link to='/about'>About</Link>
        </Menu.Item>
        <Menu.Item className='icon' icon={<ContactsOutlined/>}>
          <Link to='/contact'>Contact Us</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  )
}

export default Navbar
