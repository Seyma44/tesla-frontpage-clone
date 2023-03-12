import React, { useState } from 'react'
import '../index.css'
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import { 
         Container, 
         RightMenu, 
         Menu,
         CustomMenu, 
         CustomClose,
         CloseWrapper,
         BurgerNav
    } from './HeaderElement'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)
  return (
    <Container>
        <a><img src='/images/logo.svg' alt=''/></a>
        <Menu>
            {cars && cars.map((car,index) => (
                <a key={index} href="#">{car}</a>
            ))}
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={() => setBurgerStatus(true)}/>
        </RightMenu>
        <BurgerNav show={burgerStatus}>
            <CloseWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)}/>
            </CloseWrapper>
            {cars && cars.map((car, index) => (
                <li><a key={index} href="#">{car}</a></li>
            ))}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">CyberTruck </a></li>
            <li><a href="#">Roadaster</a></li>
        </BurgerNav>
    </Container>
  )
}

export default Header

