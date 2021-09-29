import Navbar from "./navbar";
import {useState} from "react";
import styles from './navbar.module.scss'



const Layout = ({children}) => {
    // const [color, setColor] = useState(styles.mainBg);  
    return (
        <div className="container" >
            <div className="row">
            <Navbar/>
            <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout;
