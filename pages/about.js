import { Helmet } from 'react-helmet'
import ImageProfile_2 from '../src/components/imageProfile_2'
import Layout_2 from "../src/components/layout_2"
import Image from 'next/image'
import Phone from '../public/svg/ant-design_phone-filled.svg'
import Mail from '../public/svg/Vector.svg'
import Link from 'next/link'

const About = () => {

    return (
        <Layout_2 >
            <Helmet>
                <title>Karhamba Portfolio - About</title>
                <meta name="description" content="A Personal website made by Karhamba"/>
                <link rel="icon" href='icon.ico'/>
                <style>
                    {
                        'body { background-color: white; }'
                    }</style>
            </Helmet>
            <section className=" container first_section  ">
                <div className="row">
                    <article className=" second__Article col-md-12 col-lg-6 p-4">
                        <h1>Hi!</h1>
                        {/*  */}
                        <h2 className='mb-28'>
                            <span>I&apos;m </span>
                            Joël Karhamba!</h2>
                        <p>I am a self-taught full stack developer who can build your project. I love
                            new challenges and to learn new skills.
                        </p>
                        <div className="contacts">
                            <div className="number">
                                <Phone/>
                                <Link href='tel:+32487306092'>+32487306092
                                </Link>
                            </div>
                            <div className="email ">
                                <Mail/>
                                <Link href='mailto: joelkarhamba@hotmail.com'>joelkarhamba@hotmail.com</Link>
                            </div>
                        </div>
                    </article>
                    <div className="col-md-12 col-lg-6">
                        <ImageProfile_2/>
                    </div>
                </div>
            </section>
            <style jsx>{`
                
                `}
                </style>
        </Layout_2>

    )
}

export default About
