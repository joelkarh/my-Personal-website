import HamburgerIcon from "./hamburgerIcon"
import styles from './navbar.module.scss'
import Link from 'next/link';
import {useState, useEffect} from "react"

const Navbar = () => {
    const [toggle,
        setTogggle] = useState(false);  
    const handleClick = () => {
        setTogggle(!toggle);
        console.log(toggle);
    } 
    return (
        <nav className='col-12'>
            <div className="navsection d-inline-block d-md-flex position-relative">
                <span
                    className={`d-block mb-0  text-center text-md-start  brand text-white ${styles.Heading}`}>Karhamba
                </span>
                <div id='hamburger' onClick={handleClick} className="box">
                    <HamburgerIcon isOpen={toggle}/>
                </div>
                <div
                    className={`navbarr d-flex text-center flex-column flex-md-row d-md-flex ${toggle
                    ? 'translate__Y_open'
                    : 'translate__Y'} `}>
                    <span href='/' className={`logo text-white ${styles.Heading}`}>Karhamba</span> 
                    <ul className="nav_list">   
                    <li><Link href="/">Home</Link></li>
                    <li><Link  href="/about">About</Link></li>
                    <li><Link href="/">Projects</Link></li>
                    <li><Link  href="/">Contact</Link></li>
                    </ul>
                    
                </div>
            </div>
            <style jsx>{` 
            @media  (min-width: 768px){
                .nav_list > li :hover{
                    color:#fff;
                }
            }
                `}
            </style>
        </nav>

    )
}

export default Navbar
