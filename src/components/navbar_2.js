import HamburgerIcon from "./hamburgerIcon"
import styles from './navbar.module.scss'
import Link from 'next/link';
import {useState} from "react"
import { useRouter } from "next/router";
const Navbar_2 = () => {
    const router = useRouter();
    const [color, setColor] = useState('#3C3A3A')
    const [toggle,
        setTogggle] = useState(false);  
    const handleClick = () => {
        setTogggle(!toggle);
        console.log(toggle);
    } 
    return (
        <nav>
        <div className=" navsection d-inline-block d-md-flex position-relative">
            <span
                className={`d-block mb-0  text-center text-md-start  brand  ${styles.Heading}`}>Karhamba
            </span>
            <div id='hamburger' onClick={handleClick} className="box">
                <HamburgerIcon color={color}  isOpen={toggle}/>
            </div>
            <div
                className={`navbarr d-flex text-center flex-column flex-md-row d-md-flex ${toggle
                ? 'translate__Y_open'
                : 'translate__Y'} `}>
                <span href='/' className={`logo text-white ${styles.Heading}`}>Karhamba</span> 
                <ul className="nav_list">   
                <li className={router.pathname == '/'? 'active_2' :''} ><Link href="/">Home</Link></li>
                <li className={router.pathname == '/about'? 'active_2' :''}><Link  href="/about">About</Link></li>
                <li className={router.pathname == '/projects'? 'active_2' :''}><Link href="/">Projects</Link></li>
                <li className={router.pathname == '/contact'? 'active_2' :''}><Link  href="/">Contact</Link></li>
                </ul>
                
            </div>
        </div>
        <style jsx>{` 
        nav{
            background-color:white;
        }    
        .brand{
        color: #FF7700;
        }
        @media  (min-width: 768px){
            .nav_list >  li hover{
            color:#3C3A3A !important;
        }   
            
        
        
      `}</style>
        
    </nav>
    )
}

export default Navbar_2
