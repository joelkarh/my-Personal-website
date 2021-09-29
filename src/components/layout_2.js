import Navbar_2 from "./navbar_2";




const Layout_2 = ({children}) => {
    return (
        <div className='container'>
            <div className="row">
            <Navbar_2 />
            <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout_2;
