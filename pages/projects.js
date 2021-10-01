import Layout from '../src/components/layout'
import {Helmet} from 'react-helmet'
import {projectArticles} from '../public/data/projects'
import { useState } from 'react'
import Image from 'next/image'
const Projects = () => {
const [cards, setCards] = useState(projectArticles)
    return (
        <Layout>
            <Helmet>
                <title>Karhamba Portfolio</title>
                <meta name="description" content="A Personal website made by Karhamba"/>
                <link rel="icon" href='icon.ico'/>
                <style>
                    {
                        'body { background-color: #0C0B0B; }'
                    }</style>
            </Helmet>
            <div className="container projects">
            <h1 className="text-white position-fixed">Recent projects</h1>
                <div className="row">
                    {cards.map(({id,title,image, text})=>(
                    <article key={id}>
                        <Image
                        src={image}
                        alt={title}
                        objectFit='contain'
                        width={500}
                        height={600}
                        />
                        <p>{text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default Projects
