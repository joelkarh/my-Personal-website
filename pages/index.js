import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../src/components/layout'
import styles from '../styles/Home.module.scss'
import ImageProfile_1 from '../src/components/imageProfile_1'

export default function Home() {
  return (
    <Layout className="container">
      <Head>
        <title>Karhamba Portfolio</title>
        <meta name="description" content="A Personal website made by Karhamba" />
        <link rel="icon" href="letter-j/.ico" />
      </Head>
        <section className=" container first_section ">
          <div className="row">
          <article className=" first__Article col-md-12 col-lg-6">
            <p>Development that makes you say...</p>
            <h2 className='mb-28'>Karhamba!</h2>
            <h3 className='mb-28'>Full stack developer</h3>
            <p>I am a self-taught full stack developer who can build your project.
              I love new challenges and to learn new skills.</p>
              <div type="" className="first_Article__Buttons my-5">
                <button className="button_1 me-4  me-lg-5 btn rounded-pill text-white"> <Link className='pl-2 pl-3' alt='' href='/'> Projects</Link></button>
                <button className="button_2 btn btn-link  text-white"><Link  alt='' href='/'>Let’s work together</Link> </button>
              </div>
          </article>
          <div className="col-md-12 col-lg-6">
          <ImageProfile_1 className=' '/>
          </div>
          </div>
        </section>
    </Layout>
  )
}