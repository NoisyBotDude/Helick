import React from "react"
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../../images/logo.png"
import "./header.css"

export default function Header() {
    return (
        <header>
            {/* -------------BIG SCREENS----------- */}

            <span className='nav1con'>
                <Navbar className="navbaar" variant="dark" >
                    <div className="logo"> <a href="/"><img src={logo} alt="logo" width="140" height="60" /></a></div>
                    <Nav className='mx-auto naav justify-content-end'>
                        <Link to="/" ><span className="navlnk">Home</span></Link>
                        <Link to="/products" ><span className="navlnk">Products</span></Link>
                        <Link to="/" ><span className="navlnk">Partnership</span></Link>
                        <Link to="/contact" ><span className="navlnk">Contact Us </span></Link>
                        <Link to="/about" ><span className="navlnk">About Us </span></Link>
                        <Link to="/" ><span className="navlnk demo">Request A Demo </span></Link>
                    </Nav>
                </Navbar>
            </span>


            {/* ----------SMALL SCREENS------------ */}
            <span className="nav2con">
                <Navbar className="navbaar2" variant="dark" >
                    <span className='sidetoside'>
                        <div className="logo"> <a href="/"><img src={logo} alt="logo" width="140" height="60" /></a></div>
                        <Nav className='naav justify-content-end'>
                            <Dropdown>
                                <Dropdown.Toggle id="naav-more" variant='flat1' size="ol" >
                                    More
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end">
                                    <Dropdown.Item href="/" >Home</Dropdown.Item>
                                    <Dropdown.Item href="/products" >Products</Dropdown.Item>
                                    <Dropdown.Item href="/" >Partnership</Dropdown.Item>
                                    <Dropdown.Item href="/contact" >Contact Us </Dropdown.Item>
                                    <Dropdown.Item href="/about" >About Us </Dropdown.Item>
                                    <Dropdown.Item href="/" >Request A Demo </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </span>
                </Navbar>
            </span>
        </header>
    )
}