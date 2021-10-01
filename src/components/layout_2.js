import { Helmet } from "react-helmet";
import Navbar_2 from "./navbar_2";




const Layout_2 = ({children}) => {
    return (
        <div className='container'>
            <Helmet>
                <title>Karhamba Portfolio - About</title>
                <meta name="description" content="A Personal website made by Karhamba"/>
                <link rel="icon" href='icon.ico'/>
                <style>
                    {
                        'body { background-color: white; }'
                    }</style>
            </Helmet>
            <div className="row">
            <Navbar_2 />
            <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout_2;
