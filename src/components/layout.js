import Navbar from "./navbar";
import {Helmet} from "react-helmet";

const Layout = ({children}) => {
    return (
        <div className="container">
            <Helmet>
                <title>Karhamba Portfolio</title>
                <meta name="description" content="A Personal website made by Karhamba"/>
                <link rel="icon" href='icon.ico'/>
                <style>
                    {
                    'body { background-color: #0C0B0B; }'
                    }</style>
            </Helmet>
            <div className="row">
                <Navbar/>
                <main>{children}</main>
            </div>
        </div>
    )
}

export default Layout;
